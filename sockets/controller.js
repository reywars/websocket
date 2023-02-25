

const socketController = (socket) => {

    console.log('CLiente conectado', socket.id );

    socket.on("disconnect", () => {
        console.log('Cliente desconectado', socket.id);
    });

    socket.on('enviar-mensaje', (payload, callback) => {

        const id = 12345678;
        callback(id);

        socket.broadcast.emit('enviar-mensaje', payload);
    });
}

module.exports = {
    socketController
}

