/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:06:22
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);


function rotateHandler(){
  //top.postMessage('SUCCESS', '*'); //
  console.log("resizedHandler");


    document.onmouseup = document.onkeyup = document.onselectionchange = getSelectionText;
    document.querySelector('#rotate-area').classList.add("hide");
}


function setup(){

  interact('#rotate-area').gesturable({
      onmove: function (event) {
        var arrow = document.querySelector('#toRot');

        angle += event.da;
        arrow.style.webkitTransform = arrow.style.transform = 'rotate(' + angle + 'deg)';

        document.querySelector('#angle-info').textContent = angle.toFixed(2) + '\u00b0';
        if(rotate > 100 && rotate < 180){

          /*var container =  document.querySelector(".selectContainer"); //
          container.classList.add("hide");
          console.log(rotate);*/
          rotateHandler();
        }
      }
    });
}


function getSelectionText() {
    top.postMessage('SUCCESS', '*'); //
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


var angle = 0;

function final(){
    top.postMessage('SUCCESS', '*');  
}