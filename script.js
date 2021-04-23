//FUNCIONALIDADES DO MENU LATERAL DINÂMICO
const arrowSection = document.querySelector('section.menu-arrow')
const menu = document.querySelector('nav.menu')
const main = document.querySelector('main.content')

function showHideMenu(){
    if (menu.classList == 'menu' || menu.classList == 'menu closed'){
        menu.classList = 'menu opened'
        arrowSection.classList = 'menu-arrow opened'
        main.classList = 'content min'
    }else{
        menu.classList = 'menu closed'
        arrowSection.classList = 'menu-arrow closed'
        main.classList = 'content max'
    }
}

//FUNCIONALIDADE DE ABRIR CAIXA DE AULA
const classBox = document.querySelectorAll('section.class article.class-box')

function openCloseClassBox(value){
    for (i in classBox){
        if (classBox[i].id == value){
            if (classBox[i].classList == 'class-box invisible'){
                classBox[i].classList = 'class-box visible'
            }else{
                classBox[i].classList = 'class-box invisible'
            }
        }
    }
}