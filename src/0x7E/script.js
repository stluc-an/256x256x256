/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-03-05 19:48:22
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function setup(){
	interact('.trigger')
	.on("hold", tapHandler)
}

function tapHandler (event){
	console.log("tapHandler");
	/*event.trigger.style.background="hide";*/
    var trigger = document.querySelector(".trigger");
	trigger.classList.add("hide");
    
    setup2();
}

function setup2(){
	var input = document.querySelector("input");
	input.onchange = changeHandler; 
}

function changeHandler (event){
	top.postMessage('SUCCESS', '*');
	var txt = event.target.value;
	var h1 = document.querySelector("h1");
	h1.innerText = txt;
}