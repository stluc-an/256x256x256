 document.addEventListener("DOMContentLoaded", setup);

function resizedHandler(){
	top.postMessage('SUCCESS', '*');
	console.log("resizedHandler");
}

function setup(){
	//check if shake is supported or not.
    if(!("ondevicemotion" in window)){
		alert("Not Supported");
		return;
	}
	var shakeEvent = new Shake({threshold: 5});
	shakeEvent.start();
	window.onShake = shakeHandler;


 
}

//stop listening
function stopShake(){
    shakeEvent.stop();
}

function shakeHandler(){
    alert("Shaked");

    	var img = document.querySelector("img");
	img.classList.add("hide");
	var imgSucces = document.querySelector("img.succes");
	imgSucces.classList.remove("hide");

	
 

}



function doubleTapHandler (event){
	top.postMessage('SUCCESS', '*');
	console.log("doubleTapHandler");
}

function setup2(){
	interact('.imgSucces')
	.on("doubletap", doubleTapHandler)
}
