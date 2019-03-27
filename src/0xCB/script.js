/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:06:22
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

var angle = 0;

function final(){
    top.postMessage('SUCCESS', '*');	
}


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
    if (text) {
 	   console.log(text);
	}
}


function weAreFocus (event){
  document.body.classList.add("red");
  
}




function setup(){
      document.onmouseup = document.onkeyup = document.onselectionchange = getSelectionText;


      window.onfocus = weAreFocus;		
		/*document.onmouseup = document.onkeyup = document.onselectionchange = getSelectionText;*/
}