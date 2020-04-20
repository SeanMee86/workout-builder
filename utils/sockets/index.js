const chatHistory = [];

module.exports = (io) => {
    io.on('connection', socket => {
        socket.on('getChatLogs', () => {
            socket.emit('receiveChatLogs', chatHistory);
        });
        socket.on('messageSent', (message) => {
            chatHistory.unshift(message);
            if(chatHistory.length >= 10){
                chatHistory.unshift();
            }
            io.emit('messageToClients', message);
        })
    });
};