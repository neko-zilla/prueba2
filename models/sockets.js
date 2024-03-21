let io;

function setupSockets(ioInstance) {
    io = ioInstance;

    io.on('connection', (socket) => {
        

        socket.on('mensaje-to-server', (data) => {
            console.log(data);
            io.emit('mensaje-from-server', data);
        });



      
    });
}

module.exports = {
    setupSockets
};