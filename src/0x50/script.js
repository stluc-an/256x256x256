document.addEventListener("DOMContentLoaded", setup);

function rotateHandler(){
	top.postMessage('SUCCESS', '*');
	console.log("resizedHandler");
    
}

function setup(){
var angle = 0;

interact('#rotate-area').gesturable({
  onmove: function (event) {
    var arrow = document.getElementById('arrow');

    angle += event.da;

    arrow.style.webkitTransform =
    arrow.style.transform =
      'rotate(' + angle + 'deg)';

    document.getElementById('angle-info').textContent =
      angle.toFixed(2) + '\u00b0';
  }
 
   
})
     if(angle == 'angle-info' ) && ('angle-info' == 180){
    alert(Will the real Slim Shady please stand up?);
}
    };