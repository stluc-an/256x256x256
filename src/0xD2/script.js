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

function dragMoveHandler (event){
	var target = event.target,
	// keep the dragged position in the data-x/data-y attributes
	x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
	y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
	// translate the element
	target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
	// update the posiion attributes
	target.setAttribute('data-x', x);
	target.setAttribute('data-y', y);
	console.log("dragMoveHandler");
	top.postMessage('SUCCESS', '*');
}

function setup2(){
	interact('.trigger')
	.draggable({

		inertia: true,

		autoScroll: true,
		// call this function on every dragmove event
		onmove: dragMoveHandler
	});
}
