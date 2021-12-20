let cont = document.getElementById("continue");

cont.addEventListener('click',(e) => {
    let name = document.getElementById('name').value;
    console.log(name);
    localStorage.setItem('userName',name);
    window.location = './chatRoom.html';
})