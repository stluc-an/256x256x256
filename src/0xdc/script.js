document.addEventListener("DOMContentLoaded", setup);

var angle = 0;

var chronoTimeout;

function setup(){

	//requestAnimationFrame(animate);
	setInterval(animate, 42); //ceci fait aussi le timeout! à régler!!!
	//ou => requestAnimationFrame(animate);
	chronoTimeout = setTimeout(timeoutHandler, 3000);

	//window.onmousemove = function(){
	//	clearTimeout(chronoTimeout);
	//	chronoTimeout = setTimeout(timeoutHandler, 3000);
	//}
}

function timeoutHandler(){
	var img = document.querySelector("img");
	img.classList.add("hide");
	var h1 = document.querySelector("h1");
	h1.classList.remove("hide");
}



function animate(){
	angle -= 5; //ou "+="
	/*var img = document.querySelector("img");
	img.style.transform = "rotate("+angle+"deg)";*/
}
