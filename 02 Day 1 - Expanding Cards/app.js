const panels = document.querySelectorAll('.panel');

panels.forEach(function(panel){
    panel.addEventListener('click',function(){
       removeActiveClass();
       panel.classList.add('active');
    })
})
function removeActiveClass(){
   panels.forEach(function(panel){
       panel.classList.remove('active')
   })
}
