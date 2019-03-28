/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-03-28 16:09:23
\*----------------------------------------*/
//http://qnimate.com/detect-shake-using-javascript/
document.addEventListener("DOMContentLoaded", setup);

var shakeEvent = new Shake({threshold: 5});

function setup(){
    if(!("ondevicemotion" in window)){
		alert("Not Supported");
		return;
	}

	shakeEvent.start();
	window.onShake = shakeHandler;
    
    
    /*interact('.trigger')
	.on("swipe", swipeHandler)*/
}

//stop listening
function stopShake(){
    shakeEvent.stop();
}

function shakeHandler(){
    alert("Shaked");
    stopShake()
	var shakeit = document.querySelector(".shakeit");
	shakeit.classList.add("hide");
	var arrow2 = document.querySelector(".arrow2");
	arrow2.classList.remove("hide");

	console.log("shakeHandler...");
    
    
    setup2();
}


function setup2(){
    var swipe = new Hammer(document.body);
	swipe.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
	// detect swipe and call to a function
	swipe.on(' swiperight ', function(e) {
			swipeHandler();

		if(e.type == 'swiperight'){}
		
	});
}

function swipeHandler(){
	top.postMessage('SUCCESS', '*');
	console.log("swipeHandler...");
}
