const left= document.querySelector('.left');
const right= document.querySelector('.right');
const container= document.querySelector('.container');

left.addEventListener('mouseenter',function(){
    container.classList.remove('hover-right');
    container.classList.add('hover-left');
   
   
})

right.addEventListener('mouseenter',function(){
    container.classList.remove('hover-left');
    container.classList.add('hover-right');
    // container.classList.remove('hover-left');
})