/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:10:49
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




	interact('.trigger')
	.resizable({
		// resize from all edges and corners
		edges: { left: true, right: true, bottom: true, top: true },
	})
	.on('resizemove', function (event) {
		var target = event.target,
		x = (parseFloat(target.getAttribute('data-x')) || 0),
		y = (parseFloat(target.getAttribute('data-y')) || 0);

		// update the element's style
		target.style.width  = event.rect.width + 'px';
		target.style.height = event.rect.height + 'px';

		// translate when resizing from top or left edges
		x += event.deltaRect.left;
		y += event.deltaRect.top;

		target.style.webkitTransform = target.style.transform =
		'translate(' + x + 'px,' + y + 'px)';

		target.setAttribute('data-x', x);
		target.setAttribute('data-y', y);
		target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height);

		if(event.rect.width > 100 && event.rect.height > 100){
			resizedHandler();
		}
	});
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


//OU:

//dans setup => var trigger = interact ('.trigger');
//trigger.draggable({onmove: dragMoveHandler});
