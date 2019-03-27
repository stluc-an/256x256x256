document.addEventListener("DOMContentLoaded", setup);

function final(){
	top.postMessage('SUCCESS', '*');
}

function weAreFocus (event){
	document.body.classList.add("red");
	
}

function setup(){

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
		drawProgress(leftToRight, document.querySelector(".y circle"));
		drawProgress(rotateDegrees, document.querySelector(".z circle"));
	};
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