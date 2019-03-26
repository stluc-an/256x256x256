/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:06:22
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);


function setup(){
      document.onmouseup = document.onkeyup = document.onselectionchange = getSelectionText;
    /*document.onmouseup = document.onkeyup = document.onselectionchange = getSelectionText;*/
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
    if (text != "" ) {
     var container =  document.querySelector(".selectContainer");
     container.classList.add("hide");
     console.log(text);
     rotateHandler();
  }
}


function rotateHandler(){
  top.postMessage('SUCCESS', '*');
  console.log("resizedHandler");

  interact('#rotate-area').gesturable({             //---setup avant
    onmove: function (event) {
      var arrow = document.querySelector('#toRot');

      angle += event.da;
      arrow.style.webkitTransform = arrow.style.transform = 'rotate(' + angle + 'deg)';

      document.querySelector('#angle-info').textContent = angle.toFixed(2) + '\u00b0';
      if(rotate > 100 && rotate < 180){
        rotateHandler();
      }
    }
  });
}


var angle = 0;

function final(){
    top.postMessage('SUCCESS', '*');	
}






