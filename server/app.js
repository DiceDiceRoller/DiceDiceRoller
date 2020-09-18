var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const player = []

io.on('connection', (socket) => {
  console.log('Another player is connected!')
  io.emit('connectedPlayer', 'Ada yang masuk bos')
  socket.on('playerName', (data) => {
    player.push(data)
    if(player.length === 1){
      io.emit('readyToPlay', true)
    }
    console.log(data)
  })
});

http.listen(3000, () => {
  console.log('listening on *:3000');
}); 