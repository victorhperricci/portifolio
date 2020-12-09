
// mudar o header ao dar scroll
export default function initChangeHeader(c, cs) {

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