/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-03-01 13:00:03
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);
var angle = 0;

function setup(){
	var vivante = document.querySelector("vivante");
	vivante.classList.add("hidden");
	
	interact('#rotate-area').gesturable({
		onmove: function (event) {
			var arrow = document.querySelector('#toRot');

			angle += event.da;
			arrow.style.webkitTransform = arrow.style.transform = 'rotate(' + angle + 'deg)';

			document.querySelector('#angle-info').textContent = angle.toFixed(2) + '\u00b0';
			if(rotate > 100 && rotate < 180){
				rotateHandler();
			}
		}
	});

	interact('.trigger1')
	.on("doubletap", doubleTapHandler)
}

function rotateHandler(){
	console.log("resizedHandler");
	var spirale = document.querySelector("spirale");
	spir.classList.remove("hidden");
}



function doubleTapHandler (event){
	top.postMessage('SUCCESS', '*');
	console.log("doubleTapHandler");
}

