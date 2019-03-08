/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:06:22
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function setup(){
	open("https://www.youtube.com/watch?v=AvbNeNq1RC4");
	window.onfocus = weAreFocus;
}

function weAreFocus (event){
	var h1 = document.querySelector("h1");
	h1.classList.remove("hide");

	interact('.trigger');
	.on("tap", tapHandler);
}

function tapHandler(){
console.log("tapHandler");
top.postMessage('SUCCESS', '*');
	
}



