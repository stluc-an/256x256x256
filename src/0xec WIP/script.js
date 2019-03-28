 
document.addEventListener("DOMContentLoaded", setup);


var inputValue;
function changeHandler (event) {
    var Change = document.querySelector("#Change");
    var txt = event.target.value;
    var h1 = document.querySelector("h1")
    h1.innerText = txt; 
    
}



function setup(){
  
    var btn = document.querySelector("#Button1");
    btn.onclick = Hiding;
  
    
   var input = document.querySelector("input");
   input.onkeyup = changeHandler;
    
}
 
function Hiding() {
    inputValue = document.querySelector('input[type="number"]').value
     var Paragraph1 = document.querySelector("#azerty");
    Paragraph1.classList.remove("hide");
    Change.classList.add("hide");
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
    if (text == inputValue) {
 	   console.log(text);
 	   Final();
	}
}

function Final(){
    top.postMessage('SUCCESS', '*');
    alert("Congratulations !");
}