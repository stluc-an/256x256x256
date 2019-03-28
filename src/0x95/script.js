/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:06:22
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);
var shakeEvent = new Shake({threshold: 5});

function setup(){
	//check if shake is supported or not.
    startShake()
}

function startShake(){
    if(!("ondevicemotion" in window)){
		alert("Not Supported");
		return;
	}
	shakeEvent.start();
	window.onShake = shakeHandler;
}

//stop listening
function stopShake(){
    shakeEvent.stop();
}

function shakeHandler(){
    stopShake()
	var milk = document.querySelector(".milk");
	milk.classList.add("hide");
	var shake = document.querySelector(".shake");
	shake.classList.remove("hide");

	console.log("shakeHandler...");
    
    
    setup2();
}

//stop listening
function stopShake(){
    shakeEvent.stop();
}

var angle = 0;
function setup2(){
	interact('#rotate-area').gesturable({
		onmove: function (event) {
			var arrow = document.querySelector('#toRot');

			angle += event.da;
			arrow.style.webkitTransform = arrow.style.transform = 'rotate(' + angle + 'deg)';

			document.querySelector('#angle-info').textContent = angle.toFixed(2) + '\u00b0';
			if(rotate > 100 && rotate < 180){
				rotateHandler();
			}
		}
	});
}

function rotateHandler(){
	top.postMessage('SUCCESS', '*');
	console.log("resizedHandler");
}
