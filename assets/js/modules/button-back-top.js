
export default function initShowBackTop(c, cs) {
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
