/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-03-01 13:00:03
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);
var angle = 0;

function setup(){
	var rotateObj = document.querySelector("rotateObj");
	toRot.classList.remove("hidden");
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

	interact('.trigger')
	.on("doubletap", doubleTapHandler)
}

function rotateHandler(){
	console.log("resizedHandler");
	doubleTapHandler()
}



function doubleTapHandler (event){
	console.log("doubleTapHandler");

	var spirale = document.querySelector("spirale");
	vol.classList.remove("hidden");
	var rotateObj = document.querySelector("rotateObj");
	toRot.classList.add("hidden");
}

function doubleTapEndHandler (event){
	top.postMessage('SUCCESS', '*');
}
