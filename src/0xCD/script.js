/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-03-01 13:16:26
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);
var angle = 0;

var chronoTimeout;



function setup(){
  document.onmouseup = document.onkeyup = document.onselectionchange = getSelectionText;
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
    if (text.trim() == "search") {
 	   console.log(text);

     var myContainer = document.querySelector(".selectContainer");
     myContainer.classList.add("hide");
     
     startAnim();
	}
}



function startAnim(){
  console.log("yo");
  ///setInterval(animate, 42);
  var monImage =document.querySelector("img");
  monImage.classList.remove("hide"); 

 /**/ requestAnimationFrame(animate);

  // démarrer le chrono de 3sec
 /**/ chronoTimeout = setTimeout(timeoutHandler, 3000);
  
 /**/ window.onmousedown = function(){
    clearTimeout(chronoTimeout);
    chronoTimeout = setTimeout(timeoutHandler, 3000);
  }
}

 function timeoutHandler(){
  var img = document.querySelector("img");
  img.classList.add("hide");
  var h1 = document.querySelector("h1");
  h1.classList.remove("hide");
}

function animate(){
  angle += -10;
  var img = document.querySelector("img");
  img.style.transform = "rotate(" + angle + "deg)";
  requestAnimationFrame(animate);
}


function final(){
  top.postMessage('SUCCESS', '*'); 
}

