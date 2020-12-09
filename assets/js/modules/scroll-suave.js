

export default function initScrollSuave(c, cs) {

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
