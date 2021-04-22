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

