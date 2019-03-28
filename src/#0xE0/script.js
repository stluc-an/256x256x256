/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-03-28 11:58:26
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

//récupère les donnees du truc
//document : contient l'entiereté de la page web
//window : réference tt la page web(ecran, taille, navigateur)
//connaitre tt les fonctions d'une variable : taper son nom + "." dans une console
function changeHandler(event){
	top.postMessage('SUCCESS', '*');
	console.log("change", event.target.value);
	var txt = event.target.value;
	var solution = "oooooooooo";

	if(txt == solution){
		var input = document.querySelector("input");
		input.classList.add("hide");
		click();
	}
	
	
}

function setup(){
	var input = document.querySelector("input");
	input.onkeyup = changeHandler;
	
	
}

function click(){
			top.postMessage('SUCCESS', '*');
			//alert("yes");
}