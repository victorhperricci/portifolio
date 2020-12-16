import initClickOutside from './clickOutside.js';

// menu mobile

export function initShowMenu(c) {
    const menu = c('.header ul'); 
    const menuHamburguer = c('.menu-hamb');

    function showMenu() {
        menu.classList.toggle('active')
        menuHamburguer.classList.toggle('active')

        initClickOutside(menu, ['click', 'touchstart'], () => {
            menu.classList.remove('active')
            menuHamburguer.classList.remove('active')
        })
    }
    menuHamburguer.addEventListener('click', showMenu)
}

// quando dar o scroll remover o menu
export function initWhenScrollRemoveMenu(c) {

    function scrollMenu() {
        const menu = c('.header ul');
        const menuHamburguer = c('.menu-hamb');

        if (window.pageYOffset > menu.offsetTop) {
            menu.classList.remove('active')
            menuHamburguer.classList.remove('active')
        }
    }
    scrollMenu();
    window.addEventListener('scroll', scrollMenu)
}

