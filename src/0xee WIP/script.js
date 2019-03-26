/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:06:22
\*----------------------------------------*/

document.addEventListener("DOMContentLoaded", setup);

function changeHandler (event) {
     top.postMessage('SUCCESS', '*');
    var txt = event.target.value;
     = document.querySelector("h1")
    h1.innerText = txt; 
}

function setup(){
   var input = document.querySelector("input")
   input.onmouseup = changeHandler;
}
