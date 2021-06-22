const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
// const io = new Server(server);
const io = new Server(server,{
                cors:{
                    origin: 'http://localhost:3000'
                }
            });

const port = 5000;

require('./src/socket')(io);

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/src/view/index.html');
});

// let countUser = 0

// io.on('connection', (socket) => {
//     console.log('a user connected');
//     countUser++;

//     socket.on('disconnect', () => {
//         console.log('user disconnected');
//         countUser--;
//     });

//     socket.on('send message', (data) => {
//         io.emit('load message', data)
//     })

//     io.emit('count user connect', countUser)
// });

server.listen(port, () => {
  console.log(`listening on *: ${port}`);
});