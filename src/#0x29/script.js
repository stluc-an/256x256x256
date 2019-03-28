/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-02-15 12:03:14
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);



function dragMoveHandler (event){
	
	var target = event.target;
	// keep the dragged position in the data-x/data-y attributes
	
	

	var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
	var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
	// translate the element
	target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
	target.style.background = "blue";
	// update the posiion attributes
	target.setAttribute('data-x', x);
	target.setAttribute('data-y', y);
	console.log("dragMoveHandler");
	
	
}


function setup(){
	var trigger = interact('.trigger');
	trigger.draggable({onmove: dragMoveHandler});

	shake();

}

function shake(){
	if(!("ondevicemotion" in window)){
		alert("Not Supported");
		return;
	}
	var shakeEvent = new Shake({threshold: 5});
	shakeEvent.start();
	window.onShake = shakeHandler;
	resizedHandler();
}

function stopShake(){
    shakeEvent.stop();
}

function shakeHandler(){
    alert("Shaked");
}

function resizedHandler(){
	top.postMessage('SUCCESS', '*');
	console.log("resizedHandler");
}


