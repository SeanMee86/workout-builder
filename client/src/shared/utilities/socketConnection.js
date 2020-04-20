import io from 'socket.io-client';
let socket = io.connect('/sockets');
export default socket;