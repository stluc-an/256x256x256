 /*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:06:22
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function weAreOnline(event){
	top.postMessage('SUCCESS', '*');
	console.log("weAreOnline");
}

function setup(){
	interact('#minutes')
	.on("tap", step1)
}
function step1(){
	var minutor=document.querySelector(".minutor img");
	minutor.classList.add("resize");
	var minutes=document.querySelector(".selector");
	minutes.classList.add("hidden");
	var noWifi=document.querySelector(".noWifi");
	noWifi.classList.remove("hidden");
	window.ononline = weAreOnline;
}