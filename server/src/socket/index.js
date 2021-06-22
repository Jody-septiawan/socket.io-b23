const socketChat = require('./chat')

const socketIO = (io) => {
    const chatNameSpace = io.of('/chat').on('connection', (socket)=> {
        socketChat.respond(socket)
    })

    chatNameSpace.use((socket,next) =>{
        // Conditional
        // Here ....

        next();
    })
}

module.exports = socketIO;