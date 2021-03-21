const startInput = document.getElementById('starttxt')
const endInput = document.querySelector('#endtxt')
const passInput = document.getElementById('passtxt')
const countButton = document.querySelector('#count')
const scoreDiv = document.querySelector('div#score')

function validation(){
    var start = Number(startInput.value)
    var end = Number(endInput.value)
    var pass = Number(passInput.value)

    if (end == 0 || endInput.value == ''){
        alert('Não podemos contar com valor final nulo! Considerando o valor 5...')
        end = 5
    }else if(end < start){
        alert(`O valor final deve ser maior que o inicial. Considerando o valor ${start + 4}`)
        end = start + 4
    }
    if(pass == 0 || passInput.value == ''){
        alert('Não podemos contar com passo nulo. Considerando passo 1...')
        pass = 1
    }else if(pass > end-start || pass < 0){
        alert('Não podemos contar com esse passo. Considerando passo 1...')
        pass = 1
    }

    scoreDiv.innerHTML = ''
    scoreDiv.innerHTML = 'Você selecionou:'

    var startMsg = document.createElement('span')
    startMsg.setAttribute('class', 'msg')
    startMsg.innerHTML = `Início: <strong>${start}</strong>`
    scoreDiv.appendChild(startMsg)

    var endMsg = document.createElement('span')
    endMsg.setAttribute('class', 'msg')
    endMsg.innerHTML = `Fim: <strong> ${end} </strong`
    scoreDiv.appendChild(endMsg)

    var passMsg = document.createElement('span')
    passMsg.setAttribute('class', 'msg')
    passMsg.innerHTML = `Passo: <strong> ${pass} </strong>`
    scoreDiv.appendChild(passMsg)

    var comandsArray = [start, end, pass]
    return comandsArray
}

function count(){
    var arrayValidation = validation()
    var start = arrayValidation[0]
    var end = arrayValidation[1]
    var pass = arrayValidation[2]
    console.log(start, end, pass)

    var pulosDivisao = (end - start)%pass
    console.log(pulosDivisao)

    var p = document.createElement('p')
    p.setAttribute('id', 'score-p')

    for (start; start<=end; start = start + pass){
        if (start < end-pulosDivisao){
            p.innerHTML += `${start} &#128073;&#127997;`
        }else{
            p.innerHTML += `${start}`
        }
    }
    p.innerHTML += ` </br>&#127937; <strong>Contagem finalizada!</strong>`
    scoreDiv.appendChild(p)
}

countButton.addEventListener('click', () =>{
    count()
})