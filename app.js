const express = require('express');
const {Server} = require('socket.io');

const app = express();
const PORT = process.env.PORT||8080;
const server = app.listen(PORT,() => {
    console.log(`Escuchando en puerto: ${PORT}`);
});
const io = new Server(server);

