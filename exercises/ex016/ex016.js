const button = window.document.querySelector('input#button')
const anoForm = window.document.getElementById('txtyear')
const divRes = document.querySelector('div#res-photo')

function verificar(){

    var nowYear = new Date().getFullYear()
    var anoNasc = Number(anoForm.value)
    var age = nowYear - anoNasc
    var faixa = ''
    if (age < 15){
        faixa = 'crianca'
    }else if(age < 20){
        faixa = 'jovem'
    }else if(age < 60){
        faixa = 'adulto'
    }else{
        faixa = 'idoso'
    }

    var formSex = window.document.getElementsByName('sexo')
    var gender = ''
    if (formSex[0].checked){
        gender = 'homem'
    }else{
        gender = 'mulher'
    }

    if (anoForm.value.length == 0 || anoNasc > nowYear){
        alert('Verifique os dados e tente novamente')
    }else{
        divRes.innerHTML = `<p>Você tem <strong>${age}</strong> anos e é <strong>${gender}</strong></p>`
        var img = document.createElement('img')
        img.setAttribute('src', `./images/${faixa}-${gender}.png`)
        img.setAttribute('id', 'res-img')
        divRes.appendChild(img)
    }
}

button.addEventListener('click', () => verificar())