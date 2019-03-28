/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-03-01 13:00:03
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function rotateHandler(){
	console.log("resizedHandler");
}

var angle = 0;

function setup(){
	interact('#rotate-area').gesturable({
		onmove: function (event) {
			var arrow = document.querySelector('#toRot');

			angle += event.da;
			arrow.style.webkitTransform = arrow.style.transform = 'rotate(' + angle + 'deg)';

			document.querySelector('#angle-info').textContent = angle.toFixed(2) + '\u00b0';
			if(){
			var rotate = document.querySelector("rotate-area");
			rotate.classList.add("hide");
			alert("pouvez vous quittez et revenir sur la page ? Cliquez sur le lien (0 virus garanti)");
			alert.onclick = step2 ;
			}
		}
	});
}	


function step2(){
	window.onfocus = weAreFocus;
}

function final(){
top.postMessage('SUCCESS', '*');
	
}

function weAreFocus (event){
	document.body.classList.add("red");
	
}

