const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const { setupSockets } = require('./sockets');
let app = express();
const cors = require('cors');


let port = process.env.PORT;
// Http server
let server = http.createServer(app);

// Socket configuration
let io = socketio(server);
setupSockets(io);

function setupMiddlewares() {
    // Deploy public directory
    app.use(express.static(path.resolve(__dirname, '../public')));

    // CORS 
    app.use(cors());

}

function startServer() {
    setupMiddlewares();
    server.listen(port, () => {
        console.log('Server en port ', port);
    });
}

module.exports = {
    startServer
};