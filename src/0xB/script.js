/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-03-01 13:10:19
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function final(){
top.postMessage('SUCCESS', '*');
	
}

function weAreFocus (event){
	document.body.classList.add("red");
}

function setup(){
	window.onfocus = weAreFocus;
    
}





