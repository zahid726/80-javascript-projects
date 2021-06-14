const boxes = document.querySelectorAll('.box');
window.addEventListener('scroll',checkboxes)

function checkboxes(){
    const triggleBottom= window.innerHeight / 5 * 4;

    boxes.forEach(box=>{
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop<triggleBottom){
            box.classList.add('show')
        }
        else{
            box.classList.remove('show')
        }
    })
}