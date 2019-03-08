document.addEventListener("DOMContentLoaded", setup);

function dragMoveHandler (event){
  
  var target = event.target;
  // keep the dragged position in the data-x/data-y attributes
  
  target.style.background = "red";

  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
  // translate the element
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
  // update the posiion attributes
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
  console.log("dragMoveHandler");
  top.postMessage('SUCCESS', '*');
  
}


function setup(){
  var trigger = interact('.trigger');
  trigger.draggable({onmove: dragMoveHandler});

  var input = document.querySelector("input");
  input.onkeyup = changeHandler;
}

document.addEventListener("DOMContentLoaded", setup);

function changeHandler (event){
  var txt = event.target.value;
  var h1 = document.querySelector("h1");
  h1.innerText = txt;
  if(txt == "wonderful"){
    top.postMessage('SUCCESS', '*');
    alert("LOL");
  }
}

/*function setup(){
  var input = document.querySelector("input");
  input.onkeyup = changeHandler;
}*/
