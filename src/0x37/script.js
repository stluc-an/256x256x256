document.addEventListener("DOMContentLoaded", setup);

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

/*function dragEndHandler(event){
	top.postMessage('SUCCESS', '*');
	console.log("dragEndHandler");
 
	 var img = document.querySelector("img");
	img.classList.add("hide");
	var imgSucces = document.querySelector("img.succes");
	imgSucces.classList.remove("hide");

}*/

function setup(){
	interact('.trigger')
	.draggable({
		// call this function on every dragmove event
		onmove: dragMoveHandler,
		onend: setup2,
	});

 
}

function tapHandler (event){
	top.postMessage('SUCCESS', '*');
	console.log("tapHandler");
	event.target.style.backgroundColor="green";
}

function setup2(){

	var img = document.querySelector("img");
	img.classList.add("hide");
	var imgSucces = document.querySelector("img.succes");
	imgSucces.classList.remove("hide");

	interact('.trigger2')
	.on("hold", tapHandler)
}







