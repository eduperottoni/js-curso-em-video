//Constantes
const numberInput = document.getElementById('numtxt')
const addButton = document.querySelector('#add-button')
const previewSelect = document.querySelector('#numlist')
const removeButton = document.getElementById('remove-button')
const analiseButton = document.querySelector('#analise-button')
const resDiv = document.getElementById('res')


var array = []

function validation(){ //Se o número for inválido, a função retorna 0. Caso contrário, retorna o número.
    var numbertxt = numberInput.value
    var number = Number(numbertxt)
    if (numbertxt == ''){
        alert('VOCÊ DEVE PREENCHER O CAMPO COM ALGUM VALOR...')
        return number
    }else if(number > 100 || number < 1){
        alert('O VALOR DEVE ESTAR ENTRE 1 E 100!')
        return number = 0
    }else if(array.indexOf(number) != -1){
        alert('O VALOR JÁ ESTÁ NA LISTA! DIGITE UM NÚMERO DIFERENTE...')
        return number = 0
    }else{
        return number
    }
}

function addToList(){
    resDiv.innerHTML = ''
    var number = validation()
    if (number != 0){ //Testa se o número é válido
        previewSelect.style.display = 'inherit'
        removeButton.style.display = 'inherit'
        analiseButton.style.display = 'inherit'
        var option = document.createElement('option')
        option.className = 'number-listed'
        option.value = number
        option.innerHTML = `Número ${number} adicionado`
        previewSelect.appendChild(option)
        array.push(number)
    }
    numberInput.value = ''
    numberInput.focus()
}

function removeList(){
    array = []
    previewSelect.innerHTML = ''
    previewSelect.style.display = 'none'
    removeButton.style.display = 'none'
    analiseButton.style.display = 'none'
}

function analise(){
    resDiv.innerHTML = ''
    var arrayLength = array.length
    if (arrayLength <= 1){
        alert('A LISTA DEVE TER 2 OU MAIS VALORES PARA SER ANALISADA!')
    }else{
        var arraySorted = array.sort(function(a,b){
            return a - b;
        })
        var arraySum = array.reduce((arraySum, num) => arraySum + num, 0)

        var analiseTitle = document.createElement('h2')
        analiseTitle.id = 'res-h2'
        analiseTitle.innerHTML ='Análise da lista'
        resDiv.appendChild(analiseTitle)

        var resP = document.createElement('p')
        resP.className = 'res-item'
        resP.innerHTML = `Ao todo, temos <strong>${arrayLength} números cadastrados</strong></br></br>`
        resP.innerHTML += `O <strong>maior valor</strong> informado foi <strong>${arraySorted[arrayLength-1]}</strong></br></br>`
        resP.innerHTML += `O <strong>menor valor</strong> informado foi <strong>${arraySorted[0]}</strong></br></br>`
        resP.innerHTML += `<strong>Somando</strong> todos os valores, temos <strong>${arraySum}</strong></br></br>`
        resP.innerHTML += `A <strong>média</strong> dos valores da lista é <strong>${arraySum/arrayLength}</strong`
        resDiv.appendChild(resP)
    }
}

analiseButton.addEventListener('click', () =>{
    analise()
})

addButton.addEventListener('click', () =>{
    addToList()
})

removeButton.addEventListener('click', () =>{
    removeList()
})