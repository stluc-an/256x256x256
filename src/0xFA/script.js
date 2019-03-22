/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:06:22
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);
function success(){
	top.postMessage('SUCCESS', '*');
	console.log("weAreOnline");
}

function weAreOnline (event){
	var tilt= document.querySelector("img");
	tilt.classList.add("hide");

	window.DeviceOrientationEvent=success
}

function setup(){
	window.ononline = weAreOnline;
}
