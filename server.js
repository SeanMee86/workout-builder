const path = require('path');
const express = require('express');
const app = express();
const config = process.env.NODE_ENV === 'production' ? null : require('./config');
const routes = require('./routes');

app.use(
    express.json(),
    express.urlencoded(),
    routes
);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/client/build')));

    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const port = process.env.PORT || config.app.port;
app.listen(port, console.log(`listening on PORT: ${port}`));