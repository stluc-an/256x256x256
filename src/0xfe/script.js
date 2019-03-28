document.addEventListener("DOMContentLoaded", setup);

function weAreOnline (event){
	document.body.classList.add("red");
	
}

function setup(){
	window.ononline = weAreOnline;

	var input = document.querySelector("input");
	input.onkeyup = changeHandler;
}

function final(){
	console.log("weAreOnline");
	top.postMessage('SUCCESS', '*');
}

document.addEventListener("DOMContentLoaded", setup);

function changeHandler (event){
	var txt = event.target.value;
	var h3 = document.querySelector("h3");
	h3.innerText = txt;
	if(txt == "est belle"){
		top.postMessage('SUCCESS', '*');
		alert("Et Juju aussi !");
	}
}

/*function setup(){
	var input = document.querySelector("input");
	input.onkeyup = changeHandler;
}*/