/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:06:22
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function doubleTapHandler (event){
	top.postMessage('SUCCESS', '*');
	console.log("doubleTapHandler");
}

function setup(){
	interact('.trigger')
	.on("doubletap", DoubleTapDone)
    //DoubleTapDone();
}

function DoubleTapDone(){
    var trigger = document.querySelector(".trigger");
	trigger.classList.add("hide");
    var white = document.querySelector(".hide2");
    white.classList.remove("hide2");
    ChangeBegin()
}

function ChangeBegin(){
    document.onmouseup = document.onkeyup = document.onselectionchange = getSelectionText;
}

function getSelectionText(){
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
    if (text) {
 	   console.log(text);
 	   final();
	}
}

function final(){
top.postMessage('SUCCESS', '*');
}





