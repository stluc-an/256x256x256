/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:18:31
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function setup(){
	
	var scale = 1,
	    gestureArea = document.querySelector('#pinch-area'),
	    scaleElement = document.querySelector('#toPinch'),
	    resetTimeout;

	interact(gestureArea)
	  .gesturable({
	    onmove: function (event) {
	      scale = scale * (1 + event.ds);
	      scaleElement.style.webkitTransform =
	      scaleElement.style.transform =
	        'scale(' + scale + ')';

	      
	    },
	    onend: function (event) {
	      var img = document.querySelector("vivante");
	vivante.classList.remove("hidden");
	    }
	  });

	
	var trigger = interact('.trigger');
	trigger.draggable({onmove: dragMoveHandler});
}

function tapHandler (event){
	var img = document.querySelector("img");
	spir.classList.add("hidden");
	console.log("tapHandler");
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
	var spirale = document.querySelector("spirale");
	spir.classList.remove("hidden");
	top.postMessage('SUCCESS', '*');
}

