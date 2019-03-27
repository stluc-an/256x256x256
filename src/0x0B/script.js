/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:06:22
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function setup(){
	interact('.trigger')
	.on("tap", tapHandler)
    
}

function tapHandler (event){
	top.postMessage('SUCCESS', '*');
	console.log("tapHandler");
    tapHandlerDone()
    
}

function tapHandlerDone() {
    var trigger = document.querySelector(".trigger");
	trigger.classList.add("hide");
    var a = document.querySelector("a");
    a.classList.remove("hide");
    Focus()
}

function Focus(){
	window.onfocus = weAreFocus;
    
}

function weAreFocus (event){
	var p = document.querySelector(".hide2");
    p.classList.remove("hide2");
    var trigger = document.querySelector(".trigger");
	trigger.classList.add("hide");
    var a = document.querySelector("a");
    a.classList.add("hide");
    final()
    
}

function final(){
top.postMessage('SUCCESS', '*');
}