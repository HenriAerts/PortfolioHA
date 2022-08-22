const buttons = document.querySelectorAll('.connect-btn-container');
const time = 300;

buttons.forEach((Element) => {
    Element.addEventListener('mousemove', move);
    Element.addEventListener('mouseenter', start);
    Element.addEventListener('mouseleave', end);
});

function getChilds($event){
    return {
        background: $event.target.querySelector('.magnetic-background'),
        element: $event.target.querySelector('.magnetic-element')
    };
};

function move($event){
    const x = $event.layerX - $event.target.clientWidth / 2;
    const y = $event.layerY - $event.target.clientHeight / 2;
    const { background, element } = getChilds($event);
    
    background.style.transform = `translate(${x / 5}px, ${y / 5}px)`;
    element.style.transform = `translate(${x / 3.5}px, ${y / 3.5}px)`;
};

function startAnimation($event){
    const { background, element } = getChilds($event);
    
    const transition = `all 150ms ease`;
    background.style.transition = transition;
    element.style.transition = transition;
};

function endAnimation($event){
    const { background, element } = getChilds($event);

    setTimeout(() => {
        background.style.transition = '';
        element.style.transition = '';
    }, time);


};

function start($event){
    startAnimation($event);
    endAnimation($event);
};
function end($event){
    const { background, element } = getChilds($event);

    startAnimation($event);

    background.style.transform = `translate(0px, 0px)`;
    element.style.transform = `translate(0px, 0px)`;

    endAnimation($event);

};