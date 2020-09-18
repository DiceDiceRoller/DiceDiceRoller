let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);
const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});


http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

io.on('connection', (socket) => {

    socket.emit('connections', Object.keys(io.sockets.connected).length);

    socket.on('disconnect', () => {
        console.log("A user disconnected");
    });

    socket.on('chat-message', (data) => {
        socket.broadcast.emit('chat-message', (data));
    });

    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', (data));
    });

    socket.on('stopTyping', () => {
        socket.broadcast.emit('stopTyping');
    });

    socket.on('joined', (data) => {
        socket.broadcast.emit('joined', (data));
    });

    socket.on('leave', (data) => {
        socket.broadcast.emit('leave', (data));
    });

});