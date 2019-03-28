/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-03-28 16:04:16
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);




function setup(){
	var swipe = new Hammer(document);
	swipe.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
	// detect swipe and call to a function
	swipe.on('swiperight swipeleft swipeup swipedown', function(e) {
			alert(e.type);

		if(e.type == 'swiperight'){}
		if(e.type == 'swipeleft'){}
		if(e.type == 'swipeup'){}
		if(e.type == 'swipedown'){}
	});
}

function swipeHandler(){
	var tinder_01 = document.querySelector("tinder_01");
	tinder_01.classList.add("hide");
	var tinder_02 = document.querySelector("tinder_02");
	tinder_02.classList.remove("hide");

	console.log("swipeHandler...");

	interact('.trigger')
	.on("tap", tapHandler)
}

function tapHandler (event){
	top.postMessage('SUCCESS', '*');
	console.log("tapHandler");
}