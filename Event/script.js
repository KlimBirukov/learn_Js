const buttons = document.querySelectorAll('.btn');

const handleClick = (event) => {
    console.log('target' , event.target);
    console.log('currentTarget' , event.currentTarget);
    console.log(event.target === event.currentTarget)
    //event.target - целевой элемент (на котором произошло событие, допустим кликнули)
}

buttons.forEach(button => {
    button.addEventListener('click', handleClick);
})

window.addEventListener('click',function(event) {
    console.log('WinClick', event.target);
    event.stopPropagation();
}, {capture: true})

const img = document.querySelector('img');
img.addEventListener('mouseover', (e) => {
    console.log(e.currentTarget);
    console.log(this);
})