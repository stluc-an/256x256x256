/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:06:22
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function doubleTapHandler (event){
	//top.postMessage('SUCCESS', '*');
	console.log("doubleTapHandler");
}

function setup(){
	interact('.trigger')
	.on("doubletap", DoubleTapDone)
   // DoubleTapDone();
}

function DoubleTapDone(){
    var trigger = document.querySelector(".trigger");
	trigger.classList.add("hide");
    var white = document.querySelector(".white");
    white.classList.remove("hide2");
    var a = document.querySelector(".hide3");
	a.classList.remove("hide3"); 
    Focus()
}

function Focus(){
	window.onfocus = weAreFocus;
}

function weAreFocus (event){
	var trigger = document.querySelector(".trigger");
	trigger.classList.add("hide");
    var p = document.querySelector(".hide4");
	p.classList.remove("hide4");
     var white = document.querySelector(".white");
    white.classList.add("hide2");
    var a = document.querySelector("a");
    a.classList.add("hide3");
    final()
}

function final(){
    top.postMessage('SUCCESS', '*');
}


