/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-03-28 14:25:25
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function tapHandler (event){
	
	event.target.style.backgroundColor="green";
	window.onfocus = weAreFocus;
}

function setup(){
	interact('.trigger')
	.on("hold", tapHandler)
}

/*je n'arrive pas à faire se suivre ces 2 actions*/

function weAreFocus (event){
	document.body.classList.add("red");
	top.postMessage('SUCCESS', '*');
	console.log("tapHandler");
}
