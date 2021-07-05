const counters = document.querySelectorAll('.counter');

counters.forEach(counter=>{
    counter.innerText= "0";

    const updateCounter = ()=>{
        const target= +counter.getAttribute('data-target');
        const c= +counter.innerText
        const increament= target / 200;
       if(c <target){
           counter.innerText = `${Math.ceil(c+increament )}`
           setTimeout(updateCounter, 2);
       }else
       {
           counter.innerText= target;
       }
    }
    updateCounter();
})