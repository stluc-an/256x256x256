/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-03-28 11:54:44
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

var chronoTimeout;

function tapHandler (event){
	console.log("tapHandler");
	event.target.style.backgroundColor="black";
	chronoTimeout = setTimeout(lanceAlerte, 300);
	shake();
}

function lanceAlerte(){
	//alert("secoues ce téléphone !")
	var body = document.querySelector("img")
	body.classList.remove("hide");
}

function setup(){
	interact('.trigger')
	.on("hold", tapHandler)
	//check if shake is supported or not.
	
}

var shakeEvent;
function shake(){
    if(!("ondevicemotion" in window)){
		alert("Not Supported");
		return;
	}
	shakeEvent = new Shake({threshold: 5});
	shakeEvent.start();
	window.onShake = shakeHandler;
	console.log("slt");
	stopShake();
    
}

function resizedHandler(){
	top.postMessage('SUCCESS', '*');
	console.log("resizedHandler");
}

//stop listening
function stopShake(){
    shakeEvent.stop();
}

function shakeHandler(){
    resizedHandler();
}