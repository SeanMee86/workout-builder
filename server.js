const path = require('path');
const express = require('express');
const app = express();
require('dotenv').config();
const routes = require('./routes');
const passport = require('passport');
const socketio = require('socket.io');
const socketMain = require('./utils/sockets');

app.use(passport.initialize());

require('./config/passport')(passport);

app.use(
    express.json(),
    express.urlencoded({extended: false}),
    routes
);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/client/build')));

    app.get('/*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const port = process.env.PORT;
const io = socketio(app.listen(port, console.log(`listening on PORT: ${port}`)));
socketMain(io);

