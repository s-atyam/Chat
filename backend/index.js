// an express app is created
const app = require('express')();

// now an http server is created  from the express app
const httpServer = require('http').createServer(app);

// now an io connetion is created from that http server
const io = require('socket.io')(httpServer, {
    cors: {
        origin: "*"
    }
});


io.on('connection', (socket) => {
    socket.on('chat', (payload) => {
        io.emit('chat', payload);
    });
});

httpServer.listen(5000, () => { console.log('Server is up and running on port 5000...') });