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
}

function setup(){
	interact('.trigger1')
	.on("tap", step1)
}
function step1(){
	var Menu= document.querySelector (".trigger1");
	Menu.classList.add("hide");
	var MenuInside= document.querySelector (".trigger2");
	MenuInside.classList.remove("hide");

	interact('.selector')
	.on("select",tapHandler)
}
