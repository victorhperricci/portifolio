const c = (el) => {
    return document.querySelector(el);
}

const cs = (el) => {
     return document.querySelectorAll(el);
}

projectsJSON.map((item, index) => {
    let projectItem = c('.content--individual-model .content--individual').cloneNode(true);
    
    projectItem.setAttribute('data-key', index);

    projectItem.querySelector('.content-left img').src = item.src;
    projectItem.querySelector('.content-right h1').innerHTML = item.titulo;
    projectItem.querySelector('.content-inside .p1').innerHTML = item.paragrafo1;
    projectItem.querySelector('.go-to-site a').setAttribute('href', item.botaoADiretorio)
    projectItem.querySelector('.content-left a').setAttribute('href', item.botaoADiretorio)

    c('.content-project-area').append(projectItem);
});

// ------------------------------ Maquina de Escrever
function typeWrite(elemento) {
    const textArray = elemento.innerHTML.split('');
    elemento.innerHTML = ''
    textArray.forEach((letra, index) => {
        setTimeout(() => elemento.innerHTML += letra, 80 * index) 
    });
}
const titulo = c('.home .apresentation') 
typeWrite(titulo)
// --------------------------------------- Animação de aparacer na tela

const target = cs('.animacao');
const animationClass = 'animation';


function scrollMenu() {
    const menu = c('.header nav ul');
    let menuA = menu.offsetTop;
    if (window.pageYOffset > menuA) {
        menuHamb.classList.remove('open')
        for(let i = 0; i < li.length; i++) {
            li[i].classList.remove('opacity')
        }
    }
    // 1300
}

function showBackTop() {
    const backTop = c('.back-top')
    if (window.pageYOffset > 1100) {
        backTop.style.opacity = '1'
    } else {
        backTop.style.opacity = '0'
    }   
}

function wowContent() {
    let target = cs('.content--individual')
    for(let i = 0; i < target.length; i++) {
        if (i % 2 == 0) {
            target[i].className += " wow fadeInRightBig";
        } else {    
            target[i].className += " wow fadeInLeftBig";
        }
    }
}

showBackTop();
scrollMenu();
wowContent();

window.addEventListener('scroll', function() {
    scrollMenu();
    showBackTop();
})

// --------------------------------------------------- scroll suave 
const menuHamb = c('nav ul');
const menuItens = document.querySelectorAll('.header nav ul li');
const menu = c('.menu-hamb')
const li = cs('.header ul li a')


menu.addEventListener('click', showMenu)
function showMenu() {

    if(menuHamb.classList.contains('open')) {
        menuHamb.classList.remove('open')
        for(let i = 0; i < li.length; i++) {
            li[i].classList.remove('opacity')
        }
    } else {
        menuHamb.classList.add('open')
        for(let i = 0; i < li.length; i++) {
            li[i].classList.add('opacity')
        }
    }
}
// ---------------------------------------------------------
menuItens.forEach((item) => {
    item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTop(event.target)
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

  //----------------------------------------------
