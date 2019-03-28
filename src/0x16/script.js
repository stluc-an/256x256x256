/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:05:55
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);
 
function final(){
top.postMessage('SUCCESS', '*');
alert("You are a boss");
}

function doubleTapHandler (event){
	top.postMessage('SUCCESS', '*');
	console.log("doubleTapHandler");
}

function setup(){
	interact('.trigger')
	.on("doubletap", doubleTapHandler)
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
	    onend: function (event) {
	      alert("YO");
	    {
      final();
    }
  });
}
