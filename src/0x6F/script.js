/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:10:49
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);


function tapHandler (event){
	//top.postMessage('SUCCESS', '*'); //
	console.log("tapHandler");

	weAreOnline(); //
}


function weAreOnline (event){
	document.body.classList.add("red");
	top.postMessage('SUCCESS', '*');
	console.log("weAreOnline");

	//window.ononline = weAreOnline;
}

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
	    /*onend: function (event) {
	      alert("YO");
	    }*/
});


	window.ononline = weAreOnline;
}

//OU:

//dans setup => var trigger = interact ('.trigger');
//trigger.draggable({onmove: dragMoveHandler});
