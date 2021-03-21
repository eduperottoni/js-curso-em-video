const num = window.document.querySelector('#numtxt')
const button = window.document.getElementById('button')
const resDiv = window.document.querySelector('#res')

function validation(){
    var numero = 0
    if(num.value == ''){
        alert('Valor inválido! Considerando valor 1')
        numero = 1;
    }else{
        numero = Number(num.value)
    }
    return numero
}

function showTab(){
    var numero = validation()
    resDiv.innerHTML = ''

    var h2 = document.createElement('h2')
    h2.innerText += `Tabuada do ${numero}`
    resDiv.appendChild(h2)

    console.log('Cheguei aqui')
    var i = 0
    do{
        var div = document.createElement('div')
        div.setAttribute('class','res-line')
        div.innerHTML = `${numero} x ${i} = ${numero*i}`
        i ++
        resDiv.appendChild(div)
    }while(i<=10) 
}

button.addEventListener('click',  () =>{
    showTab()
})