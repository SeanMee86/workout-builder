import io from 'socket.io-client';
const isDev = process.env.NODE_ENV === 'development';
let socket = isDev ?
    io.connect('http://localhost:8000') :
    io.connect();
export default socket;