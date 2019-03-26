document.addEventListener("DOMContentLoaded", setup);

function changeHandler (event) {
   
     top.postMessage('SUCCESS', '*');
    var p = document.querySelector("")classList.remove(".hide");
    var txt = event.target.value;
     var h1 = document.querySelector("h1")
    h1.innerText = txt; 
    
}

function setup(){
   var input = document.querySelector("input")
   input.onkeydown = changeHandler;
}
 