const chatHistory = [];

module.exports = (io) => {
    io.on('connection', socket => {
        console.log('connected');
        socket.on('getChatLogs', () => {
            socket.emit('receiveChatLogs', chatHistory);
        });
        socket.on('messageSent', (message) => {
            chatHistory.unshift(message);
            if(chatHistory.length >= 10){
                chatHistory.pop();
            }
            io.emit('messageToClients', message);
        });
        socket.on('leavingChat', message => {
            socket.disconnect();
        });
        socket.on('disconnect', () => console.log('socket disconnected'));
    });
};