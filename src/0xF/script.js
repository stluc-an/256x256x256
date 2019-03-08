/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:06:22
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function weAreOnline (event){
	document.body.classList.add("red");
	top.postMessage('SUCCESS', '*');
	console.log("weAreOnline");
	open: "http://google.com"
	interact(".toTap").on("tap", tapHandler);
}

function setup(){
	window.ononline = weAreOnline;
}
