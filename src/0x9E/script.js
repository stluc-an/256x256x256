/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-03-05 19:34:53
\*----------------------------------------*/
//http://qnimate.com/detect-shake-using-javascript/
document.addEventListener("DOMContentLoaded", setup);

function success(){
	top.postMessage('SUCCESS', '*');
	console.log("You Did It!");
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
    var liquid1=document.querySelector(".liquid1");
    liquid1.classList.add("hidden");
    var liquid2=document.querySelector(".liquid2");
    liquid2.classList.add("hidden");
    var mixLiquid=document.querySelector(".mixLiquid");
    mixLiquid.classList.remove("hidden");
    var changing=document.querySelector(".changing");
    changing.classList.remove("hidden");

    interact.on("change",changeGlassColor);
}
function changeGlassColor(){
	var glass=document.querySelector(".glass");
	glass.classList.add("hidden");
	var pinkGlass=document.querySelector(".pinkGlass");
	pinkGlass.classList.remove("hidden");
	var changing=document.querySelector(".changing");
    changing.classList.add("hidden");

    success();
}