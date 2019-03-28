/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:06:22
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);


function tapHandler (event){

var btnToHide = document.querySelector(".trigger2");
  btnToHide.classList.add("hidden");


  top.postMessage('SUCCESS', '*');
  console.log("tapHandler");
  
}


function setup(){
interact('.trigger1')
.on('hold', step1)

interact('.trigger2')
.on('hold', tapHandler)
}

function step1 (event){
  var btnToHide = document.querySelector(".trigger1");
  btnToHide.classList.add("hidden");

  var btnToShow= document.querySelector(".trigger2");
  btnToShow.classList.remove("hidden");


}