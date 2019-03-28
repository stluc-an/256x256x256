/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:05:55
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function doubleTapHandler (event){
	console.log("doubleTapHandler");
}

function setup(){
	interact('.trigger')
	.on("doubletap", doubleTapHandler)
    .draggable({
		// call this function on every dragmove event
		onmove: dragMoveHandler,
		onend: dragEndHandler,
	});
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
}

function dragEndHandler(event){
	top.postMessage('SUCCESS', '*');
	console.log("dragEndHandler");
}

