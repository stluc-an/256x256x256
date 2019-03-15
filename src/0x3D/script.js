/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:18:31
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function setup(){
	var trigger = interact('.trigger');
	trigger.draggable({onmove: dragMoveHandler});

	dropActivation();
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
	spir2.classList.add("hidden");
  var oiseau = document.querySelector("oiseau");
  oiso.classList.add("hidden");
	top.postMessage('SUCCESS', '*');
}

function dropActivation(){
	//alert("salut")
/* The dragging code for '.draggable' from the demo above
 * applies to this demo as well so it doesn't have to be repeated. */

// enable draggables to be dropped into this
interact('.dropzone').dropzone({
  // only accept elements matching this CSS selector
  accept: '.trigger',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  // listen for drop related events:

  ondropactivate: function (event) {
    // add active dropzone feedback
    event.target.classList.add('drop-active');
   // alert("ondropactivate");
  },
  ondragenter: function (event) {
  	//alert("ondragenter");
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;

    // feedback the possibility of a drop
    dropzoneElement.classList.add('drop-target');
    draggableElement.classList.add('can-drop');
    draggableElement.textContent = 'Dragged in';
  },
  ondragleave: function (event) {
  	//alert("ondragleave");
    // remove the drop feedback style
    event.target.classList.remove('drop-target');
    event.relatedTarget.classList.remove('can-drop');
    event.relatedTarget.textContent = 'Dragged out';
  },
  ondrop: function (event) {
    event.relatedTarget.textContent = 'Dropped';
   // alert("ondrop");
  },

  ondropdeactivate: function (event) {
  	//alert("ondropdeactivate");
    // remove active dropzone feedback
    event.target.classList.remove('drop-active');
    event.target.classList.remove('drop-target');
  }
});
}