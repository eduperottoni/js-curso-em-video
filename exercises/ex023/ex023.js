//Constantes
const numberInput = document.getElementById('numtxt')
const addButton = document.querySelector('#add-button')
const previewSelect = document.querySelector('#numlist')
const removeButton = document.getElementById('remove-button')


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
    var number = validation()
    if (number != 0){ //Testa se o número é válido
        previewSelect.style.display = 'inherit'
        removeButton.style.display = 'inherit'
        var option = document.createElement('option')
        option.className = 'number-listed'
        option.value = number
        option.innerHTML = `Número ${number} adicionado`
        previewSelect.appendChild(option)
        array.push(number)
    }
     
}

function removeList(){
    array = []
    previewSelect.innerHTML = ''
    previewSelect.style.display = 'none'
    removeButton.style.display = 'none'
}

addButton.addEventListener('click', () =>{
    addToList()
})

removeButton.addEventListener('click', () =>{
    removeList()
})