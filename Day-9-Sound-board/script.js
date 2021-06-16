
let a = document.getElementById('a');
let all = document.querySelectorAll('h2')
console.log(all)

let beep = new Audio();


document.addEventListener('keydown',function(e){
  let keycod = e.keyCode;
  
fun(keycod);
  
  
})


all.forEach(function(e){
e.addEventListener('click',function(v){
  let current= this.id.charCodeAt(this.id);
 
  fun(current);
  console.log(current)
  

})
})



// switch statement function


function fun(keycod){

  switch(keycod)
  {
    
    case 65:
    case 97:
      beep.src = "boom.wav";
      beep.play();
      var a = document.getElementById('a');
       a.style.backgroundColor= "orange"
       setTimeout(function(){
        a.style.backgroundColor= "violet"
       },500)
  
      break;
      case 83:
        case 115:
      beep.src = "kick.wav";
      beep.play();
      var s = document.getElementById('s');
       s.style.backgroundColor= "orange"
       setTimeout(function(){
        s.style.backgroundColor= "violet"
       },500)
    
      break;
      case 68:
        case 100:
      beep.src = "ride.wav";
      beep.play();
      var d = document.getElementById('d');
       d.style.backgroundColor= "orange"
       setTimeout(function(){
        d.style.backgroundColor= "violet"
       },1)
      break;
      case 70:
        case 102:
      beep.src = "clap.wav";
      beep.play();
      var f = document.getElementById('f');
       f.style.backgroundColor= "orange"
       setTimeout(function(){
        f.style.backgroundColor= "violet"
       },500)
      break;
      case 71:
        case 103:
      beep.src = "hihat.wav";
      beep.play();
      var g = document.getElementById('g');
       g.style.backgroundColor= "orange"
       setTimeout(function(){
        g.style.backgroundColor= "violet"
       },500)
      break;
      case 72:
        case 104:
      beep.src = "kick.wav";
      beep.play();
      var h = document.getElementById('h');
       h.style.backgroundColor= "orange"
       setTimeout(function(){
        h.style.backgroundColor= "violet"
       },500)
      break;
      case 74:
        case 105:
      beep.src = "openhat.wav";
      beep.play();
      var j = document.getElementById('j');
       j.style.backgroundColor= "orange"
       setTimeout(function(){
        j.style.backgroundColor= "violet"
       },500)
      break;
      case 75:
        case 106:
        beep.src = "ride.wav";
        beep.play();
        var k = document.getElementById('k');
       k.style.backgroundColor= "orange"
       setTimeout(function(){
        k.style.backgroundColor= "violet"
       },500)
        break;
        case 76:
          case 108:
          beep.src = "snare.wav";
          beep.play();
          var l = document.getElementById('l');
       l.style.backgroundColor= "orange"
       setTimeout(function(){
        l.style.backgroundColor= "violet"
       },500)
          break;
           default:
            beep.src = "tink.wav";
            beep.play();
            break;
          

  }

}