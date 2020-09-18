const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const cors = require('cors')
const { changeTurn } = require('./helpers/roller')
// const route = require('./route')

const port = 3000

app.use(cors())
// app.use(route)

const data = {
  playerPoints: {},
  firstDice: 0,
  secondDice: 0,
  pointBuffer: 0
}

let players = []
console.log('players:', players);
let turnCounter

io.on('connection', (socket) => {
  console.log('a user connected');

  // ========================= CHATROOM =========================
  socket.emit('connections', Object.keys(io.sockets.connected).length);
  socket.on('disconnect', () => {
      console.log("A user disconnected");
  });

  socket.on('chatMessage', (data) => {
      socket.broadcast.emit('chatMessage', (data));
  });

  socket.on('typing', (data) => {
      socket.broadcast.emit('typing', (data));
  });

  socket.on('stopTyping', () => {
      socket.broadcast.emit('stopTyping');
  });

  socket.on('joined', (data) => {
      console.log(data, "SERVER")
      socket.broadcast.emit('joined', (data));
  });

  socket.on('leave', (data) => {
      socket.broadcast.emit('leave', (data));
  });


  // ========================= Roller =========================

  socket.on('nextTurn', () => {
    turnCounter = changeTurn(players, turnCounter)
    io.sockets.emit('setActive', players[turnCounter])
  })

  socket.on('addPlayer', (name) => {
    if (Object.keys(data.playerPoints).length == 2) {
      return socket.emit('errorFull', 'Room full')
    }
    data.playerPoints[name] = 0
    players = Object.keys(data.playerPoints)
    console.log(players);
    io.sockets.emit('players', players)

    // if (players.length == 2) {
    // }
  })

  socket.on('start', () => {
    io.sockets.emit('ready', players)
    turnCounter = Math.floor(Math.random() * players.length)
    io.sockets.emit('setPoint', data.playerPoints)

    turnCounter = changeTurn(players, turnCounter)
    io.sockets.emit('setActive', players[turnCounter])
  })

  socket.on('roll', () => {
    data.firstDice = Math.ceil(Math.random() * 6)
    data.secondDice = Math.ceil(Math.random() * 6)
    data.pointBuffer += data.firstDice + data.secondDice
    if (data.firstDice == 1 || data.secondDice == 1) {
      data.pointBuffer = 0
      
      turnCounter = changeTurn(players, turnCounter)
      io.sockets.emit('setActive', players[turnCounter])
    }
    
    io.sockets.emit('roll',data)
  })

  socket.on('accept', (playerAndPoint) => {
    console.log(data);
    data.playerPoints[playerAndPoint.player] += playerAndPoint.point
    data.pointBuffer = 0
    console.log(data.playerPoints);

    io.sockets.emit('setPoint', data.playerPoints)

    if (data.playerPoints[playerAndPoint.player] >= 50) {
      return io.sockets.emit('win', playerAndPoint.player)
    }

    turnCounter = changeTurn(players, turnCounter)
    io.sockets.emit('setActive', players[turnCounter])
  })
})

http.listen(port, () => {
  console.log(`listening on ${port}`);
})
