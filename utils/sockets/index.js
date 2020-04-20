const chatHistory = [];

module.exports = (io) => {
    io.to('/sockets').on('connection', socket => {

        socket.on('getChatLogs', () => {
            socket.emit('receiveChatLogs', chatHistory);
        });

        socket.on('messageSent', (message) => {
            chatHistory.push(message);
            io.emit('messageToClients', message);
        })
    });
};