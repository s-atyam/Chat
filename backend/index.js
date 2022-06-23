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

let chatRooms = [];


io.on('connection', (socket) => {
    socket.on('chat', (payload) => {
        console.log(payload);
        io.to(payload.roomCode).emit('chat', {"name":payload.name,"userID":payload.iddiv,"message":payload.message});
    });
    socket.on('send-user', (payload) => {
        console.log(payload);
        socket.join(payload.roomCode);
        
    });
    socket.on('send-user-create', (payload) => {
        console.log(payload);

        if(payload.roomCode===''){
            socket.join('0000');
        }else{
            socket.join(payload.roomCode);
        }
    });
});

httpServer.listen(5000, () => { console.log('Server is up and running on port 5000...') });