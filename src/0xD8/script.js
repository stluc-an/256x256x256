/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:06:22
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);


var chronoTimeout;

function setup(){
	// démarrer le chrono de 3sec
	chronoTimeout = setTimeout(timeoutHandler, 3000);
	
	window.onmousedown = function(){
		clearTimeout(chronoTimeout);
		chronoTimeout = setTimeout(timeoutHandler, 3000);
	}
}

function timeoutHandler(){
	console.log("timeoutEndHandler");

	var swipe = new Hammer(document);
	swipe.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
	// detect swipe and call to a function
	swipe.on('swiperight swipeleft swipeup swipedown', function(e) {
			alert(e.type);

		if(e.type == 'swiperight'){}
		if(e.type == 'swipeleft'){}
		if(e.type == 'swipeup'){}
		if(e.type == 'swipedown'){}
	});
}


function swipeHandler(){
	top.postMessage('SUCCESS', '*');
	console.log("swipeHandler...");
}


