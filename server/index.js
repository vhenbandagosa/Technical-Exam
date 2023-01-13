const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const http = require('http');
const socketio = require('socket.io');
const colors = require('colors');
const morgan = require('morgan');
dotenv.config({ path: './config/config.env'});

const { db } = require('../config/db');
const routes = require('./routes');

//SOCKETS
const { hasLoggedIn } = require('./sockets/hasLoggedIn');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
app.set('db', db);
app.use(express.json());

app.use(routes);

io.on('connect', socket => {
    hasLoggedIn(socket, io, db);
});

app.get('/', (req, res) => res.send(db));

const PORT = process.env.PORT || '4000';
server.listen(PORT, () => console.log(`Server is running in ${process.env.PORT} mode on port ${PORT}`.blue.bold));

