/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:06:22
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

var angle = 0;

var chronoTimeout;


function setup(){
	setInterval(animate, 10); //ceci fait aussi le timeout! à régler!!!
	//ou => requestAnimationFrame(animate);

	//démarrer le chrono de 3s (time-out):
	chronoTimeout = setTimeout(timeoutHandler, 3000);

	//on récupère la fonction précédente
	/*clearTimeout(chronoTimeout);*/

	interact('.trigger')
	.on("doubletap", doubleTapHandler)
}


function timeoutHandler(){
	var img = document.querySelector("img");
	img.classList.add("hide");

	/*var h1 = document.querySelector("h1");
	h1.classList.remove("hide");*/
} 


function animate(){
	angle += 8; //ou "-="
	var img = document.querySelector("img");
	img.style.transform = "rotate("+angle+"deg)";
}

function timeoutEndHandler(event){
	console.log("timeoutEndHandler");
}

function doubleTapHandler(event){
	top.postMessage('GOOD!', '*');
	console.log("doubleTapHandler");

	var img = document.querySelector("img");
	img.classList.remove("hide");
}