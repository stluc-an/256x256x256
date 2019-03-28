/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-03-28 14:38:57
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function doubleTapHandler (event){

	var  btnToHide = document.querySelector(".trigger2");
	btnToHide.classList.add("hidden");

	top.postMessage('SUCCESS', '*');
	console.log("doubleTapHandler");
}

function setup(){
	interact (".trigger1").on("doubletap", step1)
}

function step1(event){
	
	var  btnToHide = document.querySelector(".trigger1");
	btnToHide.classList.add("hidden");

	var  btnToShow = document.querySelector(".trigger2");
	btnToShow.classList.remove("hidden");
	interact (".trigger2").on("doubletap", doubleTapHandler)
}
