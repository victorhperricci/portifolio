export default function initType(c, cs) {
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