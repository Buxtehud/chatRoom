const express = require('express');
const {Server} = require('socket.io');

const app = express();
const PORT = process.env.PORT||8080;
const server = app.listen(PORT,() => {
    console.log(`Escuchando en puerto: ${PORT}`);
});
const io = new Server(server);

app.use(express.static('public'));

messages = [];

io.on('connection',socket => {
    console.log('Cliente conectado');
    socket.emit('welcome','Bienvenido al Servidor');
    socket.on('message',data => {
        let date = new Date();
        let min = date.getMinutes();
        let hour = date.getHours();
        if(hour < 10){
            hour = '0'+hour;
        }
        messages.push({id:socket.id,user:data.user,message:data.message,time:`${date.toDateString()} ${hour}:${min}`});
        io.emit('log',messages);
    })
})