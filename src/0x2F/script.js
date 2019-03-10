/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:10:49
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function dragMoveHandler (event){
	
	var target = event.target;
	target.style.background ="gold";
	// keep the dragged position in the data-x/data-y attributes
	//target.getAttribute('data-x')
	var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
	var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
	console.log(x, y);

	// translate the element
	target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
	// update the posiion attributes
	target.setAttribute('data-x', x);
	target.setAttribute('data-y', y);
	console.log("dragMoveHandler");
	top.postMessage('SUCCESS', '*');
	
} 
function setup(){
	var trigger = interact('.trigger');
	trigger.draggable({onmove: dragMoveHandler
	});
		// call this function on every dragmove event
		
}
function weAreOnline (event){
	console.log("dragEndHandler");
    document.body.classList.add("red");
    top.postMessage('SUCCESS', '*');
    console.log("weAreOnline");
    window.ononline = null;
}
