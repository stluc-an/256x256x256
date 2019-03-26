/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:06:22
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function tapHandler (event){
    var btnToHide = document.querySelector(".trigger2");
    btnToHide.classList.add("hidden");
    
    
	top.postMessage('SUCCESS', '*');
	console.log("tapHandler");
	event.target.classList="trigger2";
    
}


function setup(){
	interact('.trigger')
	.on("hold", tapHandler)
    
    
    window.ononline = weAreOnline;
    trigger1.on("tap", step1);
    
}

function weAreOnline (event){
    document.body.classList.add ("red");
    activeInteract();
	top.postMessage('SUCCESS', '*');
	console.log("weAreOnline");
}

function step1(event){
    var btnToHide = document.querySelector(".trigger2");
    btnToHide.classList.add("hidden");
    
    
    var btnToShow = document.querySelector("red");
    btnToShow.classList.remove("hidden");
    
    
    var trigger2 = interact(".trigger2");
    trigger2.on("tap", tapHandler);
}


