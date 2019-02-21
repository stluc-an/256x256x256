/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-02-21 17:41:58
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function onlineHandler(){
	top.postMessage('SUCCESS', '*');
	document.body.style.backgroundColor = "lightgreen";
}

function setup(){
	window.ononline = onlineHandler;
}
