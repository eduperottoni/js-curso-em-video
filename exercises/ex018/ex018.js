const num = window.document.querySelector('#numtxt')
const button = window.document.getElementById('button')
const resDiv = window.document.querySelector('#res')
const resDivH2 = window.document.getElementsByTagName('h2')[0]
const selTab = window.document.querySelector('#tab')

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
    resDiv.style.display = 'flex'
    var numero = validation()
    resDivH2.innerText = `Tabuada do ${numero}`
    var i = 0
    selTab.innerHTML = ''
    do{
        var option = document.createElement('option')
        option.value = `tab${i}`
        option.text = `${numero} x ${i} = ${numero*i}`
        i ++
        selTab.appendChild(option)
    }while(i<=10) 
}

button.addEventListener('click',  () =>{
    showTab()
})