
// --------------------------------------- Animação de aparacer na tela

export default function initScrollAnimate(c, cs) {

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
        const windowHeight = window.innerHeight * 0.6;
            const top = item.getBoundingClientRect().top;
            const isSectionVisible = (windowHeight - top) > 0;

            if (isSectionVisible) {
                item.classList.add('animate')
            } 
    }
    
}
