/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:06:22
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

/*function final(){
top.postMessage('SUCCESS', '*');
	
}*/

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
   if (text == "Arts numériques") {
      console.log(text);
      alert("exactement !")
     //final();
      var txt = document.querySelector("h2");
      txt.classList.add("hide");
      var txt2 = document.querySelector("p");
      txt2.classList.add("hide");
      triggerinteract();    
	}
}


function setup(){
	document.onmouseup = document.onkeyup = document.onselectionchange = getSelectionText 
}

function triggerinteract(){
  interact('.trigger')
  .on("hold", tapHandler)
}

function tapHandler (event){
	top.postMessage('SUCCESS', '*');
	console.log("tapHandler");
	event.target.style.backgroundColor="yellow";
}

