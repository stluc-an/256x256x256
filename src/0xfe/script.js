document.addEventListener("DOMContentLoaded", setup);

function weAreOnline (event){
	document.body.classList.add("red");
	
}

function setup(){
	window.ononline = weAreOnline;
}

function final(){
	console.log("weAreOnline");
	top.postMessage('SUCCESS', '*');
	alert("Almost...")
}

document.addEventListener("DOMContentLoaded", setup);

function changeHandler (event){
	var txt = event.target.value;
	var h1 = document.querySelector("h1");
	h1.innerText = txt;
	if(txt == "est belle"){
		top.postMessage('SUCCESS', '*');
		alert("WOWWWWW");
	}
}

function setup(){
	var input = document.querySelector("input");
	input.onkeyup = changeHandler;
}