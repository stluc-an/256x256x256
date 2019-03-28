/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-03-07 11:49:12
\*----------------------------------------*/
//http://qnimate.com/detect-shake-using-javascript/
document.addEventListener("DOMContentLoaded", setup);

function swipeHandler(){
	top.postMessage('SUCCESS', '*');
	console.log("swipeHandler...");
	console.log("hello");
}


function setup(){
	var background = document.querySelector("background");
	//aller a swiper
	interact('.trigger')
	.draggable({
		// call this function on every dragmove event
		onmove: dragMoveHandler,
		onend: dragEndHandler,
	});
	

}

function swipe(){
	var swipe = new Hammer(document);
	swipe.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
	// detect swipe and call to a function
	swipe.on('swiperight swipeleft swipeup swipedown', function(e) {
			alert(e.type);

		if(e.type == 'swiperight'){}
		if(e.type == 'swipeleft'){}
		if(e.type == 'swipeup'){}
		if(e.type == 'swipedown'){}
			background.classList.remove("hidden");

	});
	
//retour setup ou autre fonction avec dragg
}

function dragMoveHandler (event){
	var target = event.target,
	// keep the dragged position in the data-x/data-y attributes
	x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
	y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
	// translate the element
	target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
	// update the posiion attributes
	target.setAttribute('data-x', x);
	target.setAttribute('data-y', y);
}

function dragEndHandler(event){
	top.postMessage('SUCCESS', '*');
	console.log("dragEndHandler");
}


