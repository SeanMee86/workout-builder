const chatHistory = [];

let currentUsers = [];

const userDisconnect = (io, socket, event) => {
    return socket.on(event, () => {
        const user = currentUsers.filter(user => user.userId === socket.id);
        currentUsers = currentUsers.filter(user => user.userId !== socket.id);
        io.emit('userDisconnected', `${user[0] ? user[0].userName : null} Has Left The Chat`);
    });
};

module.exports = (io) => {
    io.on('connection', socket => {
        socket.on('getChatLogs', () => {
            socket.emit('receiveChatLogs', chatHistory);
        });
        socket.on('userConnected', userData => {
            currentUsers.push({userName: userData.user, userId: socket.id});
            io.emit('userConnected', `${userData.user} Has Joined The Chat`);
        });
        socket.on('messageSent', (message) => {
            chatHistory.unshift(message);
            if(chatHistory.length >= 10){
                chatHistory.pop();
            }
            io.emit('messageToClients', message);
        });
        userDisconnect(io, socket, 'userDisconnected');
        userDisconnect(io, socket, 'disconnect');
    });
};