window.onload = function() {
    let border34 =  document.querySelectorAll('.container div .b1, .container div .b2');
    let border1 =  document.querySelector('.container div .b3');
    let border2 = document.querySelector('.container div .b4');
    let img = document.querySelector('.container img');

    border2.classList.add('translateX2');
    border1.classList.add('translateX3');

    setTimeout(() => {
        img.classList.add('scale')
    }, 2000);

    for(let i = 0; i < border34.length; i++) {
         border34[i].classList.add('translateX')
    }

}
    
const divImg = document.querySelector('div div');
setTimeout(() => {
    window.location.href = 'home.html'
}, 3500);