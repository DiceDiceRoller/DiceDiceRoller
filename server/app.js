const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const cors = require('cors')
// const route = require('./route')

const port = 3000

app.use(cors())
// app.use(route)

const data = {
  rollCounter: 0,
  firstDice: 0,
  secondDice: 0,
  pointBuffer: 0
}

const playerPoints = {}
let players
let turnCounter

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.emit('test', 'abcde')

  socket.on('addPlayer', (name) => {
    if (Object.keys(playerPoints).length == 2) {
      return socket.emit('errorFull', 'Room full')
    }
    playerPoints[name] = 0
    players = Object.keys(playerPoints)
    return socket.emit('players', players)
  })

  socket.on('start', () => {
    turnCounter = Math.floor(Math.random() * players.length)
    return socket.emit('setActive', players[turnCounter])
  })

  socket.on('roll', () => {
    data.rollCounter += 1
    data.firstDice = Math.ceil(Math.random() * 6)
    data.secondDice = Math.ceil(Math.random() * 6)
    data.pointBuffer += data.firstDice + data.secondDice
    if (data.firstDice == 1 || data.secondDice == 1) {
      data.pointBuffer = 0
    }
    socket.emit('roll', data)
  })

  socket.on('accept', (player) => {
    playerPoints[player] += data.pointBuffer
    data.pointBuffer = 0
    if (turnCounter != players.length - 1) {
      turnCounter += 1
    } else {
      turnCounter = 0
    }
    return socket.emit('setActive', players[turnCounter])
  })
})

http.listen(port, () => {
  console.log(`listening on ${port}`);
})