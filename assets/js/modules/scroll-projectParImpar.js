export default function initProjectsScroll(c, cs) {
    function projectsScroll() {
        const projects = cs('.content--individual')
        
        projects.forEach((item, index) => {
            item.setAttribute('data-anime', 'top')
        })
    }
    
    window.addEventListener('scroll', projectsScroll)
}
