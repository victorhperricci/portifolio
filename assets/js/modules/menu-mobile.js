
// menu mobile

export function initShowMenu(c, cs) {
    let menuHamb = c('nav ul');
    let menu = c('.menu-hamb')
    let li = cs('.header ul li a')

    function showMenu() {
        if (menuHamb.classList.contains('open')) {
            menuHamb.classList.remove('open')
            for (let i = 0; i < li.length; i++) {
                li[i].classList.remove('opacity')
            }
        } else {
            menuHamb.classList.add('open')
            for (let i = 0; i < li.length; i++) {
                li[i].classList.add('opacity')
            }
        }
    }
    menu.addEventListener('click', showMenu)
}

// quando dar o scroll remover o menu
export function initWhenScrollRemoveMenu(c, cs) {
    function scrollMenu() {
        const menu = c('.header nav ul');
        let menuHamb = c('nav ul');
        let menuA = menu.offsetTop;
        let li = cs('.header ul li a')

        if (window.pageYOffset > menuA) {
            menuHamb.classList.remove('open')
            for (let i = 0; i < li.length; i++) {
                li[i].classList.remove('opacity')
            }
        }
    }
    scrollMenu();
    window.addEventListener('scroll', scrollMenu)
}

