const left= document.querySelector('.left');
const right= document.querySelector('.right');
const container= document.querySelector('.container');

left.addEventListener('mouseenter',function(){
    container.classList.add('hover-left');
    container.classList.remove('hover-right');
})

right.addEventListener('mouseenter',function(){
    container.classList.add('hover-right');
    container.classList.remove('hover-left');
})