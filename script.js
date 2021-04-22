//FUNCIONALIDADES DO MENU LATERAL DINÂMICO
const arrowSection = document.querySelector('section.menu-arrow')
const menu = document.querySelector('nav.menu')
const menuOptions = document.querySelector('nav.menu section.menu-options')

function openCloseMenu(){
    if (menu.classList == 'menu' || menu.classList == 'menu menu-closed'){
        menu.classList = 'menu menu-opened'
        arrowSection.innerHTML = '<img src="./images/left-arrow-black.png" alt="Passe o Mouse e veja o menu">'
        menuOptions.classList = 'menu-options menu-opened'
    }else{
        menu.classList = 'menu menu-closed'
        arrowSection.innerHTML = '<img src="./images/rigth-arrow-black.png" alt="Passe o Mouse e veja o menu">'
        menuOptions.classList = 'menu-options menu-closed'
    }
}

//FUNCIONALIDADE DE ABRIR CAIXA DE AULA
const classBox = document.querySelectorAll('section.class article.class-box')

function openCloseClassBox(value){
    for (i in classBox){
        if (classBox[i].id == value){
            if (classBox[i].classList == 'class-box invisible'){
                classBox[i].classList.remove('invisible')
                classBox[i].classList.add('visible')
            }else{
                classBox[i].classList.remove('visible')
                classBox[i].classList.add('invisible')
            }
        }
    }
}