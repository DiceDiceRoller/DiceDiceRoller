var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const player = []

io.on('connection', (socket) => {
  console.log('Another player is connected!')
  io.emit('connectedPlayer', 'Ada yang masuk bos')
  socket.on('playerName', (data) => {
    player.push(data)
    console.log(player)
    if(player.length > 1){
      io.emit('readyToPlay', true)
      this.player = []
      console.log(player)
    }
    console.log(data)
  })
});

http.listen(3000, () => {
  console.log('listening on *:3000');
}); 