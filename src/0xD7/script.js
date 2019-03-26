window.onload = function() {
  window.setTimeout(fadein, 4000);} 
   
function fadein() {
  document.getElementById('text').style.display = 'none';}

document.addEventListener("DOMContentLoaded", setup);

function setup(){
	interact('.trigger')
	.on("hold", tapHandler)
}

function tapHandler (event){
	top.postMessage('SUCCESS', '*');
    	alert("BIEN JOUER");
	console.log("tapHandler");
}

