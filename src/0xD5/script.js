/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:06:22
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);
document.addEventListener("DOMContentLoaded", setup2);

var chronoTimeout;

function setup(){
	///setInterval(animate, 42);
	requestAnimationFrame(animate);

	chronoTimeout = setTimeout(timeoutHandler, 3000);
	

	window.onmousemove = function(){
		clearTimeout(chronoTimeout);
		chronoTimeout = setTimeout(timeoutHandler, 3000);

	}
}

function timeoutHandler(){
	var h1 = document.querySelector("h1");
	h1.classList.add("hide");
	var h2 = document.querySelector("h2");
	h2.classList.remove("hide");
}

function animate(){
	var h1 = document.querySelector("h1");
	requestAnimationFrame(animate);
}

function rotateHandler(){
	top.postMessage('SUCCESS', '*');
	console.log("resizedHandler");
}
var angle = 0;
function setup2(){
	
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
}
