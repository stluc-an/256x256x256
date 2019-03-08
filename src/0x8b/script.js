 /*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-03-05 19:44:11
\*----------------------------------------*/
//http://qnimate.com/detect-shake-using-javascript/
document.addEventListener("DOMContentLoaded", setup);

function resizedHandler(){
	top.postMessage('SUCCESS', '*');
	console.log("resizedHandler");
}


function setup(){
	var swipe = new Hammer(document);
	swipe.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
	// detect swipe and call to a function
	swipe.on(' swipeup ', function(e) {
			alert(e.type);

		 
		if(e.type == 'swipeup'){}
		 
	});


 



}