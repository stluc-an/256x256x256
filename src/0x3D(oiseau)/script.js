/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:18:31
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function setup(){
	var img = document.querySelector("img");
	//img.classList.remove("hidden");
	var trigger = interact('.trigger');
	trigger.draggable({onmove: dragMoveHandler});
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
	interact('.trigger')
	chronoTimeout = setTimeout(timeoutHandler,3000);
	window.onmousedown = function(){
			clearTimeout(chronoTimeout);
			chronoTimeout = setTimeout(timeoutHandler,3000);
		}
	
}

function dragEndHandler(event){
	console.log("dragEndHandler");
	
	}


function timeoutHandler(){
	var cage = document.querySelector("cage");
	spir.classList.remove("hidden");
	var img = document.querySelector("img");
	img.classList.add("hidden");
	top.postMessage('SUCCESS', '*');
}

