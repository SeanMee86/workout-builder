const chatHistory = [];

module.exports = (io) => {
    io.on('connection', socket => {
        socket.on('getChatLogs', () => {
            socket.emit('receiveChatLogs', chatHistory);
        });
        socket.on('userConnected', userData => {
            io.emit('userConnected', `${userData.user} Has Joined The Chat`);
        });
        socket.on('messageSent', (message) => {
            chatHistory.unshift(message);
            if(chatHistory.length >= 10){
                chatHistory.pop();
            }
            io.emit('messageToClients', message);
        });
        socket.on('userDisconnected', userData => {
            io.emit('userDisconnected', `${userData.user} Has Left The Chat`);
        });
    });
};