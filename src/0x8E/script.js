/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:06:22
\*----------------------------------------*/

document.addEventListener("DOMContentLoaded", setup);

function changeHandler (event){
	var txt= event.target.value;
	var h1= document.querySelector("h1");
	h1.innerText= txt;
	if (txt == "giggle"){
		top.postMessage('SUCCESS', '*');
	}
}

function setup(){
	var input= document.querySelector("input") //input[type='text']
	input.onkeyup= changeHandler;
}