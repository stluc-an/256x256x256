/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:06:22
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);
var angle = 0;


function setup(){

	
	requestAnimationFrame(animate);
	//démarrer chrono de trois secondes
	chronoTimeout = setTimeout(timeoutHandler,3000);

	window.onmousedown = function(){
			clearTimeout(chronoTimeout);
			chronoTimeout = setTimeout(timeoutHandler,3000);
	}
}
function timeoutHandler(){
	var img = document.querySelector("img");
	img.classList.add("hidden");
	var h1 = document.querySelector("h1");
	h1.classList.remove("hidden");
}

function animate(){
	angle += 10;
	var img = document.querySelector("img");
	img.style.transform = "rotate("+angle+"deg)";
	requestAnimationFrame(animate);

}