/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:06:22
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

/*function tapHandler (event){
	top.postMessage('SUCCESS', '*');
	console.log("tapHandler");
}*/
function success(){
	var openTheOven= document.querySelector(".trigger");
	openTheOven.classList.remove("openOven");
	console.log("yo");
	top.postMessage('SUCCESS', '*');
}

function setup(){
	interact('.trigger')
	.on("tap", tapOven)
	var thingsToHide= document.querySelector(".toHide");
	thingsToHide.classList.add("hidden");
}
function tapOven(){
	var openTheOven= document.querySelector(".trigger");
	openTheOven.classList.add ("openOven");
	tapOnTheOven= interact("trigger");
	interact.on("tap",apparitionAndDrop);
}
function apparitionAndDrop(){
	var thingsToUnhide= document.querySelector(".toHide");
	thingsToUnhide.classList.remove("hidden");

	interact('#chicken')
	.draggable({
		// call this function on every dragmove event
		onmove: dragMoveHandler
	});

	interact('.dropzone').dropzone({
  // only accept elements matching this CSS selector
  accept: '#chicken',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.5,

  // listen for drop related events:

  /*ondropactivate: function (event) {
  	console.log(1);
  },
  ondragenter: function (event) {
  	console.log(2);
  },
  ondragleave: function (event) {
  	console.log(3);
  },*/
  ondrop: function (event) {
  	console.log("drop");
  	success();
  },/*
  ondropdeactivate: function (event) {
  	console.log(5);
  }*/
});

}
function dragMoveHandler (event){
	var target = event.target;
	// keep the dragged position in the data-x/data-y attributes
	var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;   
    //console.log(x, y);
    
	// translate the element
    
	target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
	// update the posiion attributes
	target.setAttribute('data-x', x);
	target.setAttribute('data-y', y);

}