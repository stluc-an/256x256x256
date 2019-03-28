/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-03-28 14:46:19
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function setup(){
	interact('.trigger').on("doubletap", doubleTapHandler);

	//tapHandler();
}



function doubleTapHandler (event){

	console.log("doubleTapHandler");
		var btnToHide = document.querySelector('.trigger2')
		btnToHide.classList.remove("hidden");
		interact('.trigger2').on("hold", tapHandler);
}

function tapHandler (event){

	var btnToHide = document.querySelector('.trigger');
	btnToHide.classList.add("hidden");

	var btnToShow = document.querySelector('.trigger2');
	btnToShow.classList.remove("hidden");
	console.log("tapHandler");
	event.target.style.backgroundColor="yellow";
	top.postMessage('SUCCESS', '*');
}

