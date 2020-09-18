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
  rollCounter: 0,
  firstDice: 0,
  secondDice: 0,
  pointBuffer: 0
}

let players
let turnCounter

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('nextTurn', () => {
    turnCounter = changeTurn(players, turnCounter)
    io.sockets.emit('setActive', players[turnCounter])
  })

  socket.on('addPlayer', (name) => {
    // if (Object.keys(data.playerPoints).length == 2) {
    //   return socket.emit('errorFull', 'Room full')
    // }
    data.playerPoints[name] = 0
    players = Object.keys(data.playerPoints)
    console.log(players);
    io.sockets.emit('players', players)
    return socket.emit('players', players)
  })

  socket.on('start', () => {
    turnCounter = Math.floor(Math.random() * players.length)

    turnCounter = changeTurn(players, turnCounter)
    io.sockets.emit('setActive', players[turnCounter])
  })

  socket.on('roll', () => {
    data.rollCounter += 1
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

    if (data.playerPoints[playerAndPoint.player] >= 50) {
      io.sockets.emit('win', playerAndPoint.player)
    }

    io.sockets.emit('setPoint', {playerPoints: data.playerPoints, pointBuffer: 0})

    turnCounter = changeTurn(players, turnCounter)
    io.sockets.emit('setActive', players[turnCounter])
  })
})

http.listen(port, () => {
  console.log(`listening on ${port}`);
})