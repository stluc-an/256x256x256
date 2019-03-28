/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-03-28 09:49:50
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function doubleTapHandler (event){
	top.postMessage('SUCCESS', '*');
	console.log("doubleTapHandler");
}

function setup(){
	interact('.trigger1')
	.on("doubletap", step1);
}
function step1(){
	var egg1=document.querySelector(".trigger1");
	var crackedEgg1=document.querySelector("#trigger3");
	var coockedEgg=document.querySelector("#trigger5");
	egg1.classList.add("hide");
	crackedEgg1.classList.remove("hide");
	coockedEgg.classList.remove("hide");
	interact.on ("doubletap",step2);
}
function step2(){
	interact('.trigger2')
	.on("doubletap", step3);
}
function step3 (){
	var egg2=document.querySelector(".trigger2");
	var crackedEgg2=document.querySelector("#trigger4");
	var coockedEgg=document.querySelector("#trigger6");
	egg2.classList.add("hide");
	crackedEgg2.classList.remove("hide");
	coockedEgg.classList.remove("hide");
	interact.on("doubletap",step4);
}
function step4 (){
	interact('.trigger2')
	.on("doubletap", doubleTapHandler);
}