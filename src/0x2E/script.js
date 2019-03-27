/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:06:22
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

/*function changeHandler (event){
	var txt= event.target.value;
	var h1= document.querySelector("h1");
	h1.innerText= txt;
	if (txt == "giggle"){
		top.postMessage('SUCCESS', '*');
	}
}*/
function success(){
	console.log("dragMoveHandler");
	top.postMessage('SUCCESS', '*');
}

function setup(){
	//var input= document.querySelector("input") //input[type='text']
	//input.onkeyup= changeHandler;
	interact('#milk')
	.draggable({
		// call this function on every dragmove event
		onmove: dragMoveHandler
	});
	
}
function dragMoveHandler (event){
	var target = event.target;
	// keep the dragged position in the data-x/data-kkkk :y attributes
	var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;   
    
	// translate the element
    
	target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
	// update the posiion attributes
	target.setAttribute('data-x', x);
	target.setAttribute('data-y', y);
	step1();
}
function step1(){
	var milky= document.querySelector(".liquid");
	milky.classList.remove("hidden");
	var pinkStraw= document.querySelector(".Pink");
	pinkStraw.classList.remove("hidden");
	interact.on("change",step2);
}
function step2(){
	var pinkStraw= document.querySelector(".Pink");
	pinkStraw.classList.add("hidden");
	var greyStraw= document.querySelector(".Grey");
	greyStraw.classList.remove("hidden");
	success();
}


