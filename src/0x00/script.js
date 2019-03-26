/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:06:22
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function tapHandler (event){
	top.postMessage('SUCCESS', '*');
	console.log("tapHandler");
	interact('.trigger')
	.on("tap", tapHandler2)
}


function setup(){
	interact('.trigger')
	.on("tap", tapHandler)
}

function tapHandler2 (event){
	top.postMessage('SUCCESS', '*');
	console.log("tapHandler");
