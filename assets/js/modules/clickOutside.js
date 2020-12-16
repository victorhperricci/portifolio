export default function initClickOutside(element, events, callback) {

    const html = document.documentElement;
    const outside = 'data-outside';

    
    if (!element.hasAttribute(outside)) {
        events.forEach(userEvent => {
           setTimeout(() => html.addEventListener(userEvent, handleOusideClick))
        })
        element.setAttribute(outside, '')
    }

    function handleOusideClick(event) {
        if (!element.contains(event.target)) {
            
            events.forEach(userEvent => {
               setTimeout(() => html.removeEventListener(userEvent, handleOusideClick)) 
            });

            callback();
            element.removeAttribute(outside);
        }
    }

}