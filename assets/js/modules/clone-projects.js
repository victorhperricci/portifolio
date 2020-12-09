export const c = (el) => {
    return document.querySelector(el);
}

export const cs = (el) => {
    return document.querySelectorAll(el);
}

// Clonando os projetos

export function initCloneProject() {
    projectsJSON.map((item, index) => {
        let projectItem = c('.content--individual-model .content--individual').cloneNode(true);
    
        projectItem.setAttribute('data-key', index);
    
        projectItem.querySelector('.content-left img').src = item.src;
        projectItem.querySelector('.content-right h1').innerHTML = item.titulo;
        projectItem.querySelector('.content-inside .p1').innerHTML = item.paragrafo1;
    
        projectItem.querySelector('.go-to-site a').setAttribute('href', item.botaoADiretorio)
        projectItem.querySelector('.go-to-site a.repositorio').setAttribute('href', item.botaoRepositorio)
    
        projectItem.querySelector('.content-left a').setAttribute('href', item.botaoADiretorio)
        projectItem.querySelector('.content-left a.repositorio').setAttribute('href', item.botaoRepositorio)
    
    
        c('.content-project-area').append(projectItem);
    });
}
