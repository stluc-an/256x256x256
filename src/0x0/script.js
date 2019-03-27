/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-03-27 16:59:24
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function tapHandler (event){
	top.postMessage('SUCCESS', '*');
	console.log("tapHandler");
}

function setup(){
	interact('.trigger')
	.on("tap", tapHandler)
}
