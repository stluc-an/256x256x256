/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:18:31
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function pinchHandler(){
	var trigger = interact('.trigger');
	trigger.draggable({onmove: dragMoveHandler});


	var mouche = document.querySelector("mouche");
	vivante.classList.remove("hidden");

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
	      
	dragMoveHandler();
	    }
	  });
	 
}

function setup(){
	pinchHandler();

}


function dragMoveHandler (event){

	var dropzone = document.querySelector("#dropzone");
	dropzone.classList.remove("hidden");
	var mouche = document.querySelector("mouche");
	vivante.classList.add("hidden");
	var poubelle = document.querySelector("#bin");
	bin.classList.remove("hidden");
	var moucheMorte = document.querySelector("#morte");
	morte.classList.remove("hidden");
	
	var target = event.target,
	// keep the dragged position in the data-x/data-y attributes
	x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
	y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
	// translate the element
	target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
	// update the posiion attributes
	target.setAttribute('data-x', x);
	target.setAttribute('data-y', y);
	interact('.trigger');
	
}

function dragEndHandler(event){
top.postMessage("SUCCESS", "*");
	console.log("dragEndHandler");
	final();
	}

function final(){
	alert("ouais!");
top.postMessage('SUCCESS', '*');
}