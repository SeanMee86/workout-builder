const chatHistory = ['some', 'stuff', 'here'];

module.exports = (io) => {
    io.on('connection', socket => {
        console.log('connection');
        socket.emit('updateChat', chatHistory);
        socket.on('messageSent', (message) => {
            chatHistory.push(message);
            io.emit('messageToClients', message);
        })
    });
};