/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:05:55
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function dragMoveHandler (event){
	var target = event.target;
    
	// keep the dragged position in the data-x/data-y attributes
	var x = (parseFloat(target.getAttribute('data-x')) || -150) + event.dx;
    var y = (parseFloat(target.getAttribute('data-y')) || -100) + event.dy;   
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
	interact('#symboltwo')
	.draggable({
		// call this function on every dragmove event
		onmove: dragMoveHandler
	});
}

