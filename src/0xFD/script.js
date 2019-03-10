/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:06:22
\*----------------------------------------*/

document.addEventListener("DOMContentLoaded", setup);


function weAreOnline (event){
    var img = document.querySelector("img");
    img.classList.add("hidden");
    var freezewifi = document.querySelector("#freezewifi");
    freezewifi.classList.remove("hidden");
    top.postMessage('SUCCESS', '*');
    console.log("weAreOnline");
}

function setup(){
  window.ononline = weAreOnline;
  chronoTimeout = setTimeout(timeouHandler, 3000);
  clearTimeout(chronoTimeout);
  window.onmousedown = function(){
    clearTimeout(chronoTimeout);
    chronoTimeout = setTimeout(timeouHandler,3000);
      }
  //démarrer le chrono de 3sec


}
function timeouHandler(){
  var freezewifi= document.querySelector("#freezewifi");
  freezewifi.classList.add("hidden");
}