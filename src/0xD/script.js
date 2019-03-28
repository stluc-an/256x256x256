/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:06:22
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);
var angle =0;
var chronoTimeout;

function setup(){
	///setInterval(animate, 42);
	requestAnimationFrame(animate);

	chronoTimeout = setTimeout(timeoutHandler, 3000);
	

	window.onmousemove = function(){
		clearTimeout(chronoTimeout);
		chronoTimeout = setTimeout(timeoutHandler, 3000);

	}
}

function timeoutHandler(){
	var img = document.querySelector("img");
	img.classList.add("hide");
	var h1 = document.querySelector("h1");
	h1.classList.remove("hide");
}

function animate(){
	angle += -10;
	var img = document.querySelector("img");
	img.style.transform = "rotate(" + angle + "deg)";
	requestAnimationFrame(animate);
}