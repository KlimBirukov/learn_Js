const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        console.log('click');
    })

    button.addEventListener('contextmenu',function () {
        console.log('contextmenu')
    })

    button.addEventListener('contextmenu',function () {
        console.log('contextmenu')
    })

    button.addEventListener('dblclick',function () {
        console.log('dblclick')
    })

    button.addEventListener('mousedown',function () {
        console.log('mousedown')
    })

    button.addEventListener('mouseenter',function () {
        console.log('mouseenter')
    })

    button.addEventListener('mouseleave',function () {
        console.log('mouseleave')
    })

    button.addEventListener('mousemove',function () {
        console.log('mousemove')
    })

    button.addEventListener('mouseover',function () {
        console.log('mouseover')
    })

    button.addEventListener('mouseout',function () {
        console.log('mouseout')
    })

    button.addEventListener('mouseup',function () {
        console.log('mouseup')
    })

    button.addEventListener('pointerlockchange',function () {
        console.log('pointerlockchange')
    })

    button.addEventListener('pointerlockerror',function () {
        console.log('pointerlockerror')
    })

    button.addEventListener('select',function () {
        console.log('select')
    })

    button.addEventListener('wheel',function () {
        console.log('wheel')
    })
})