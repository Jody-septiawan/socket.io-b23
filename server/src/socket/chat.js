const { chat } = require('../../models')

const getChats = async (socket) => {
    try {
        let data = await chat.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })

        data = JSON.parse(JSON.stringify(data))

        socket.emit('messages', data)

    } catch (error) {
        console.log(error)
    }
}

module.exports.respond = (socket) => {
    console.log('a user connect')

    setInterval(() => {
        getChats(socket)
    },2000)

    socket.on('add message', async (data) => {
        try {
            await chat.create(data)
        } catch (error) {
            console.log(error)
        }
    })
}