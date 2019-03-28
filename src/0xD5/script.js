/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-03-28 12:20:20
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);
//récupère les donnees du truc
//document : contient l'entiereté de la page web
//window : réference tt la page web(ecran, taille, navigateur)
//connaitre tt les fonctions d'une variable : taper son nom + "." dans une console

var angle = 0;
var chronoTimeout;
var angle2 = 0;

function setup(){

	//setInterval(animate, 20);
	//requestAnimationFrame(animate);
	chronoTimeout = setTimeout(timeoutHandler, 3000);

	/*window.onmousemove = function(){
		clearTimeout(chronoTimeout);
		chronoTimeout = setTimeout(timeoutHandler, 3000);

	}*/

	interact('#rotate-area').gesturable({
		onmove: function (event) {
			var arrow = document.querySelector('#toRot');

			angle2 += event.da;
			arrow.style.webkitTransform = arrow.style.transform = 'rotate(' + angle2 + 'deg)';

			document.querySelector('#angle2-info').textContent = angle2.toFixed(2) + '\u00b0';
			if(rotate > 100 && rotate < 180){
				rotateHandler();
			}
		}
	});
}

function timeoutHandler(){
	var img = document.querySelector("img");
	img.classList.add("hide");
	var h1 = document.querySelector("h1");
	h1.classList.remove("hide");
}


function animate(){
	angle += 10;
	var img = document.querySelector("img");
	img.style.transform = "rotate("+angle+"deg)";
	requestAnimationFrame(animate);

}

function rotateHandler(){
	top.postMessage('SUCCESS', '*');
	console.log("resizedHandler");
}
