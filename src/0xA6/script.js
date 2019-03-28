/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-03-05 19:05:13
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function resizedHandler(){
	top.postMessage('SUCCESS', '*');
	console.log("resizedHandler");
}

function setup(){
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
		drawProgress(leftToRight, document.querySelector(".y circle"));
		drawProgress(rotateDegrees, document.querySelector(".z circle"));
	};
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

