/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:06:22
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function weAreOnline (event){
	console.log("weAreOnline");
	var img = document.querySelector("img");
	img.classList.add("hidden");
	var toPinch = document.querySelector("#toPinch");
	toPinch.classList.remove("hidden");
	pinchHandler();


	}
	

function setup(){
	window.ononline = weAreOnline;
}


function final(){
	top.postMessage('SUCCESS', '*');
	
}




function pinchHandler(){

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
	    	final();
	    }
	  });
	 
	  tapHandler();
}
