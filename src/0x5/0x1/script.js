/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:05:55
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function doubleTapHandler (event){
	top.postMessage('SUCCESS', '*');
	console.log("doubleTapHandler");
}

function setup(){
	interact('.trigger')
	.on("doubletap", doubleTapHandler)
}
