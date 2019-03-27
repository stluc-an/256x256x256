/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-03-01 13:16:26
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

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
 	   final();
	}
}

function resizedHandler(){
  top.postMessage('SUCCESS', '*');
  console.log("resizedHandler");
}


function setup(){
	document.onmouseup = document.onkeyup = document.onselectionchange = getSelectionText;

  //check if shake is supported or not.
    if(!("ondevicemotion" in window)){
    alert("Not Supported");
    return;
  }
  var shakeEvent = new Shake({threshold: 5});
  shakeEvent.start();
  window.onShake = shakeHandler;
}

function stopShake(){
    shakeEvent.stop();
}

function shakeHandler(){
    alert("Shaked");
}





