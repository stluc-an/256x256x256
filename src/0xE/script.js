/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-02-21 17:51:16
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function onlineHandler(event){
	top.postMessage('SUCCESS', '*');
	console.log(event.target.value);
	document.querySelector("h1").innerText = event.target.value;
}

function setup(){
	document.querySelector("input").onkeyup = onlineHandler;
}
