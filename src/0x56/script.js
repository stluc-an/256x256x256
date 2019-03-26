/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:06:22
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);
var angle = 0;


function setup(){
	interact('#rotate-area').gesturable({
		onmove: function (event) {
			var arrow = document.querySelector('#toRot');

			angle += event.da;
			arrow.style.webkitTransform = arrow.style.transform = 'rotate(' + angle + 'deg)';

			document.querySelector('#angle-info').textContent = angle.toFixed(2) + '\u00b0';
			if(rotate > 100 && rotate <180){
				rotateHandler();
			}
		}
	});
}

function rotateEndHandler(){
	var TVP_DVD = document.querySelector("TVP_DVD");
	TVP_DVD.classList.add("hide");
	var thierry_01 = document.querySelector("thierry_01");
	thierry_01.classList.remove("hide");
	console.log("resizedHandler");

	var scale = 1,
	    gestureArea = document.querySelector('#pinch-area'),
	    scaleElement = document.querySelector('#toPinch'),
	    resetTimeout;

	interact(gestureArea)
	  .gesturable({
	    onmove: function (event) {
	      scale = scale * (1 + event.ds);
	      scaleElement.style.webkitTransform =
	      scaleElement.style.transform =
	        'scale(' + scale + ')';
	    },
	    onend: function (event) {
	      alert("Et oui, je suis actionnaire chez TV Paint!");
	    }
	  });
}

function tapHandler (event){
	top.postMessage('SUCCESS', '*');
	console.log("tapHandler");
}
