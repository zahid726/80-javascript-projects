const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle=>{
    toggle.addEventListener('click',function(){
        toggle.parentNode.classList.toggle('active');
    })
})