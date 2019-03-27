document.addEventListener("DOMContentLoaded", setup);

/*function rotateHandler(){
	top.postMessage('SUCCESS', '*');
	console.log("resizedHandler");
}*/

/*function resizedHandler(){

}*/

var angle = 0;

function setup(){
	/*var trigger = interact('.trigger');
	trigger.rotable({onmove: rotateHandler});*/
	interact('#rotate-area').gesturable({
		onmove: function (event) {
			var arrow = document.querySelector('#toRot');

			angle += event.da;
			arrow.style.webkitTransform = arrow.style.transform = 'rotate(' + angle + 'deg)';


			document.querySelector('#angle-info').textContent = angle.toFixed(2) + '\u00b0';
			if(angle > 100 && angle < 360){
				startSwipe();
			}
		}
	});
}

function startSwipe(){
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

/*document.addEventListener("DOMContentLoaded", setup);*/

/*function swipeHandler(){
	top.postMessage('SUCCESS', '*');
	console.log("swipeHandler...");
	console.log("hello");
}*/


/*function setup(){
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
}*/