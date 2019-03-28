/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:06:22
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

var angle = 0;

function weAreOnline (event){
	document.body.classList.add("red");
	//top.postMessage('SUCCESS', '*');
	console.log("weAreOnline");


	/*var iii = document.querySelector("#iii");
	iii.classList.remove("hidden");
	top.postMessage('SUCCESS', '*');
	console.log("weAreOnline")*/

	var rect = document.querySelector("rect"); //
	rect.classList.add("hide");
}


function setup(){
		window.ononline = weAreOnline;



		interact('#rotate-area').gesturable({
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



function rotateHandler(){

	/*interact('#rotate-area').gesturable({
		onmove: function (event) {
			var arrow = document.querySelector('#toRot');

			angle += event.da;
			arrow.style.webkitTransform = arrow.style.transform = 'rotate(' + angle + 'deg)';

			document.querySelector('#angle-info').textContent = angle.toFixed(2) + '\u00b0';
			if(rotate > 100 && rotate < 180){
				rotateHandler();
			}
		}
	});*/



	top.postMessage('SUCCESS', '*');
	console.log("resizedHandler");
}