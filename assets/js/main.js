const c = (el) => {
    return document.querySelector(el);
}

const cs = (el) => {
    return document.querySelectorAll(el);
}

// Clonando os projetos

projectsJSON.map((item, index) => {
    let projectItem = c('.content--individual-model .content--individual').cloneNode(true);

    projectItem.setAttribute('data-key', index);

    projectItem.querySelector('.content-left img').src = item.src;
    projectItem.querySelector('.content-right h1').innerHTML = item.titulo;
    projectItem.querySelector('.content-inside .p1').innerHTML = item.paragrafo1;

    projectItem.querySelector('.go-to-site a').setAttribute('href', item.botaoADiretorio)
    projectItem.querySelector('.go-to-site a:nth-child(2)').setAttribute('href', item.botaoRepositorio)

    projectItem.querySelector('.content-left a').setAttribute('href', item.botaoADiretorio)
    projectItem.querySelector('.content-left a:nth-child(2)').setAttribute('href', item.botaoRepositorio)


    c('.content-project-area').append(projectItem);
});















// ------------------------------ Maquina de Escrever

function initType() {
    function typeWrite(elemento) {
        const textArray = elemento.innerHTML.split('');
        elemento.innerHTML = ''
        textArray.forEach((letra, index) => {
            setTimeout(() => elemento.innerHTML += letra, 80 * index)
        });
    }
    const titulo = c('.home .apresentation')
    typeWrite(titulo)
}
initType();
// --------------------------------------- Animação de aparacer na tela

function initScrollAnimate() {

    function scrollAnimate() {
        const dataHome = cs('[data-anime-home]')
        const datasPage = cs('[data-anime]')

        dataHome.forEach((item, index) => {
            scrollDataHome(item, index)
        })

        datasPage.forEach((item) => {
            scrollDatasPage(item)
        })
    }

    scrollAnimate();
    window.addEventListener('scroll', scrollAnimate)

    // essas funçoes estão sendo chamadas acima, apenas organização
    function scrollDataHome(item, index) {
        setTimeout(() => {
            item.classList.add('animate')
        }, 500 * index)
    }
    

    function scrollDatasPage(item) {
        const windowHeight = window.innerHeight * 0.7;
            const top = item.getBoundingClientRect().top;
            const isSectionVisible = (windowHeight - top) > 0;

            if (isSectionVisible) {
                item.classList.add('animate')
            } 
    }
    
}
initScrollAnimate();

// --------------------------------------

function initProjectsScroll() {
    function projectsScroll() {
        const projects = cs('.content--individual')
        
        projects.forEach((item, index) => {
    
            if (index % 2 == 0) {
                item.setAttribute('data-anime', 'left')
            } else {
                item.setAttribute('data-anime', 'right')
            }
        })
    }
    
    window.addEventListener('scroll', projectsScroll)
}
initProjectsScroll();



// mostra botão de voltar ao topo

function initShowBackTop() {
    function showBackTop() {
        const backTop = c('.back-top')
        if (window.pageYOffset > 1100) {
            backTop.style.opacity = '1'
        } else {
            backTop.style.opacity = '0'
        }
    }
    showBackTop();
    window.addEventListener('scroll', showBackTop)
}
initShowBackTop();



// --------------------------------------------------- scroll suave 

function initScrollSuave() {

    const menuItens = document.querySelectorAll('.header nav ul li');
    const backTop = c('.back-top')

    menuItens.forEach((item) => {
        item.addEventListener('click', scrollToIdOnClick);
    })

    backTop.addEventListener('click', scrollToIdOnClick)

    function scrollToIdOnClick(event) {
        let menuHamb = c('nav ul');
        event.preventDefault();
        const to = getScrollTop(event.target) - 90;
        scrollToPosition(to);
        menuHamb.classList.remove('open')
    }

    function scrollToPosition(to) {
        smoothScrollTo(0, to);
    }

    function getScrollTop(element) {
        const id = element.getAttribute('href');
        return c(id).offsetTop;
    }

    function smoothScrollTo(endX, endY, duration) {
        const startX = window.scrollX || window.pageXOffset;
        const startY = window.scrollY || window.pageYOffset;
        const distanceX = endX - startX;
        const distanceY = endY - startY;
        const startTime = new Date().getTime();

        duration = typeof duration !== 'undefined' ? duration : 800;

        // Easing function
        const easeInOutQuart = (time, from, distance, duration) => {
            if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
            return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
        };

        const timer = setInterval(() => {
            const time = new Date().getTime() - startTime;
            const newX = easeInOutQuart(time, startX, distanceX, duration);
            const newY = easeInOutQuart(time, startY, distanceY, duration);
            if (time >= duration) {
                clearInterval(timer);
            }
            window.scroll(newX, newY);
        }, 1000 / 60); // 60 fps
    };
}
initScrollSuave();
//----------------------------------------------


// menu mobile

function initShowMenu() {
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
initShowMenu();




// quando dar o scroll remover o menu
function initWhenScrollRemoveMenu() {
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
initWhenScrollRemoveMenu();







// mudar o header ao dar scroll
function initChangeHeader() {

    function changeHeader() {
        const header = c('header')
        const li = cs('.header ul li')
        const windowTop = window.pageYOffset;

        if (windowTop !== 0) {
            header.classList.add('shadow-active')
        } else {
            header.classList.remove('shadow-active')
        }
    }
    window.addEventListener('scroll', changeHeader)
}
initChangeHeader();



