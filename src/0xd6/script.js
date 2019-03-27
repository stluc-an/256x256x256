document.addEventListener("DOMContentLoaded", setup);
var angle = 0;

var chronoTimeout;

function setup(){
	///setInterval(animate, 42);
	requestAnimationFrame(animate);

	// démarrer le chrono de 3sec
	chronoTimeout = setTimeout(timeoutHandler, 3000);
	
	window.onmousedown = function(){
		clearTimeout(chronoTimeout);
		chronoTimeout = setTimeout(timeoutHandler, 3000);
	}

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
	    }
	  });
}

function timeoutHandler(){
	var img = document.querySelector("img");
	img.classList.add("hide");
	var h3 = document.querySelector("h3");
	h3.classList.remove("hide");
}


function animate(){
	angle += -10;
	var img = document.querySelector("img");
	img.style.transform = "rotate(" + angle + "deg)";
	requestAnimationFrame(animate);
}

/*document.addEventListener("DOMContentLoaded", setup);*/

function tapHandler (event){
	top.postMessage('SUCCESS', '*');
	console.log("tapHandler");
}

/*function setup(){
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
	    }
	  });
}*/
