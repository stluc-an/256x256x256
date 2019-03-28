/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:06:22
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);
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
function finalTimeout(){
console.log("hello");
var h2 = document.querySelector("h2");
	h2.classList.add("hide");
	var h3 = document.querySelector("h3");
	h3.classList.remove("hide");
}

function timeoutHandler(){
	var h1 = document.querySelector("h1");
	h1.classList.add("hide");
	var h2 = document.querySelector("h2");
	h2.classList.remove("hide");

	chronoTimeout = setTimeout(finalTimeout, 3000);
	window.onmousemove = function(){
		clearTimeout(chronoTimeout);
		chronoTimeout = setTimeout(finalTimeout , 3000);

	}
}

function animate(){
	var h1 = document.querySelector("h1");
	requestAnimationFrame(animate);
}

