/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:06:22
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);
var shakeEvent = new Shake({threshold: 5});

function setup(){
	//check if shake is supported or not.
    startShake()
}

function startShake(){
    if(!("ondevicemotion" in window)){
		alert("Not Supported");
		return;
	}
	shakeEvent.start();
	window.onShake = shakeHandler;
}

//stop listening
function stopShake(){
    shakeEvent.stop();
}

function shakeHandler(){
    stopShake()
	var bulles1 = document.querySelector(".bulles1");
	bulles1.classList.add("hide");
	var bulles2 = document.querySelector(".bulles2");
	bulles2.classList.remove("hide");

	console.log("shakeHandler...");
    
    
    interact('.trigger')
	.on("tap", tapHandler)
}

function tapHandler (event){
	top.postMessage('SUCCESS', '*');
	console.log("tapHandler");
}