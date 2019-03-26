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

function dragEndHandler(event){
	console.log("dragEndHandler");
	top.postMessage('SUCCESS', '*');
	alert("AWESOME");
}

function setup(){
	interact('.trigger')
	.draggable({
		// call this function on every dragmove event
		onmove: dragMoveHandler,
		onend: dragEndHandler,
	});

	var input = document.querySelector("input");
	input.onkeyup = changeHandler;
}

document.addEventListener("DOMContentLoaded", setup);

function changeHandler (event){
	var txt = event.target.value;
	var h1 = document.querySelector("h1");
	h1.innerText = txt;
	if(txt == "hello"){
		top.postMessage('SUCCESS', '*');
		alert("YOU'RE AMAZING");
	}
}


/*function setup(){
	var input = document.querySelector("input");
	input.onkeyup = changeHandler;
}*/

