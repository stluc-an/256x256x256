document.addEventListener("DOMContentLoaded", setup);

function rotateHandler(){
	top.postMessage('SUCCESS', '*');
	console.log("resizedHandler");
}
var angle = 0;
function setup(){
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

document.addEventListener("DOMContentLoaded", setup);
var angle = 0;

var chronoTimeout;

function setup(){
	///setInterval(animate, 42);
	requestAnimationFrame(animate);

	// démarrer le chrono de 3sec
	chronoTimeout = setTimeout(timeoutHandler, 3000);
	
	window.onmousedown = function(){
		clearTimeout(chronoTimeout);
		chronoTimeout = setTimeout(timeoutHandler, 3000);
	}
}

function timeoutHandler(){
	var img = document.querySelector("img");
	img.classList.add("hide");
	var h1 = document.querySelector("h1");
	h1.classList.remove("hide");
}


function animate(){
	angle += -10;
	var img = document.querySelector("img");
	img.style.transform = "rotate(" + angle + "deg)";
	requestAnimationFrame(animate);
}