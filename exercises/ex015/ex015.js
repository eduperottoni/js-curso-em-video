const msgHr = window.document.querySelector('#msg-hr')
const photo = window.document.getElementById('photo-img')
const msgCump = window.document.getElementById('msg-cump')
const bodyStyle = window.document.body.style

function carregar(){
    
    var horaAtual = new Date().getHours()
    var minutoAtual = new Date().getMinutes()
    msgHr.innerHTML = `<p>Agora são <strong> ${horaAtual}h${minutoAtual}min </strong></p>`

    if (horaAtual>=0 && horaAtual<=12){
        bodyStyle.background = 'cornflowerblue'
        msgCump.innerHTML += '<strong>BOM DIA!</strong>'
        photo.src = './images/manha.png'  
    }else if (horaAtual>12 && horaAtual<18){
        bodyStyle.background = 'orange'
        msgCump.innerHTML += '<strong>BOA TARDE!</strong>'
        photo.src = './images/tarde.png'
    }else{
        bodyStyle.background = '#032450'
        msgCump.innerHTML += '<strong>BOA NOITE!</strong>'
        photo.src = './images/noite.png'
    }
}

window.onload = carregar()