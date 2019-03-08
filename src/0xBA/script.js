/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:06:22
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function setup(){
	var img = document.querySelector("img");
	img.classList.add("hidden");
	window.onfocus = weAreFocus;
	if (!window.DeviceOrientationEvent) {
		return alert("NO DeviceOrientationEvent");
	}

	window.ondeviceorientation =  function(event) {
		// alpha: rotation around z-axis
		var rotateDegrees = ((event.alpha/360) + 1) % 1;
		// gamma: left to right
		var leftToRight = ((event.gamma/360) + 1) % 1;
		// beta: front back motion
		var frontToBack = ((event.beta/360) + 1) % 1;

		drawProgress(frontToBack, document.querySelector(".x circle"));
		
	};
}

function final(){
top.postMessage('SUCCESS', '*');
	
}

function weAreFocus (event){
	document.body.classList.add("red");
	var img = document.querySelector("img");
	img.classList.remove("hidden");
}

function resizedHandler(){
	top.postMessage('SUCCESS', '*');
	console.log("resizedHandler");
}


function drawProgress(ratio, target){
	var twoPi =  Math.PI * 2;
	var halfPi =  Math.PI * 0.5;
	var width = 65;
	var angle = ratio * twoPi;
	var radius = width * 0.5 - 5;
	var offset = width * 0.5;

	var x = offset + radius * Math.cos(angle-halfPi);
	var y = offset + radius * Math.sin(angle-halfPi);
	
	target.setAttribute("cx", x)
	target.setAttribute("cy", y)
}

