const arrowSection = document.querySelector('section.menu-arrow')
const menu = document.querySelector('nav.menu')

function openMenu(){
    menu.classList.add('menu-opened')
}

function closeMenu(){
    menu.classList.remove('menu-opened')
    menu.classList.add('menu-closed')
}