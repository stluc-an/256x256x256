/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-03-01 10:43:22
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function tapHandler (event){
	top.postMessage('SUCCESS', '*');
	console.log("tapHandler");
	event.target.style.backgroundColor="green";
}

function setup(){
	interact('.trigger')
	.on("hold", tapHandler)
}

/*je n'arrive pas à faire se suivre ces 2 actions*/

function weAreFocus (event){
	document.body.classList.add("red");
	
}

function setup(){
	window.onfocus = weAreFocus;
}
