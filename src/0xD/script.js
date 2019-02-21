/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-02-21 18:29:29
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

var timer;
var counter = 3;

function timeoutHandler(){
	top.postMessage('SUCCESS', '*');
	document.body.style.backgroundColor = "red";
}

function setup(){
	document.body.onmousedown = document.body.onmousemove = reset;
	reset();
	setInterval(countdown, 1000);
}

function countdown(){
	counter -= 1;
	document.querySelector("h1").innerText = parseFloat(counter);
}

function reset(){
	counter = 3;
	document.querySelector("h1").innerText = parseFloat(counter);
	clearTimeout(timer);
	timer = setTimeout(timeoutHandler, 3000);
}