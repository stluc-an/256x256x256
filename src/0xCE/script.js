/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-03-28 11:57:13
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);
//récupère les donnees du truc
//document : contient l'entiereté de la page web
//window : réference tt la page web(ecran, taille, navigateur)
//connaitre tt les fonctions d'une variable : taper son nom + "." dans une console
function getSelectionText() {
    var text = "";
    var activeEl = document.activeElement;
    var activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;
    if (
      (activeElTagName == "textarea") || (activeElTagName == "input" &&
      /^(?:text|search|password|tel|url)$/i.test(activeEl.type)) &&
      (typeof activeEl.selectionStart == "number")
    ) {
        text = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd);
    } else if (window.getSelection) {
        text = window.getSelection().toString();
    }
   if (text == "génial" || "décevant" || "moche" || "plutôt cool" || "quel travail ?" || "ma petite soeur fait mieux") {
     console.log(text);
	}
}	

function myKeyPress(event) {
    if (event.which == 13 || event.keyCode == 13) {
    	click();
        //code to execute here
        return false;
    }
    return true;
}

function setup(){
  document.onmouseup = document.onkeyup =
  document.onselectionchange = getSelectionText;
	var input = document.querySelector("input");
	input.onkeyup = myKeyPress;
	
}

function click(){
	top.postMessage('SUCCESS', '*');
}