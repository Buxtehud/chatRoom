const socket = io();
let userName = localStorage.getItem('userName');

let send = document.getElementById('send');
send.addEventListener('click',(e) => {
    let input = document.getElementById('inputMessage');
    let val = input.value;
    if(val){
        socket.emit('message',{user:userName,message:val});
    }
    input.value = "";
})

socket.on('log',data => {
    let logContainer = document.getElementById('logMessages');
    let messages = data.map(message => {
        return `<div>
                    <p>${message.time}</p>
                    <p><span>${message.user}: </span>${message.message}</p>
                </div>`
    }).join('');
    logContainer.innerHTML = messages;
});

socket.on('welcome',data => {alert(data+" "+userName)});