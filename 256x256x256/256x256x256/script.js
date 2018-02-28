/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2018-02-28 12:51:24
\*----------------------------------------*/
//let availableApp = (new Array(256)).fill().map((p, k)=>k);
let availableApp = [25, 177, 178];
let chainApp = [];
let timeout ;
let maxAppDuration = 14000;
function lerp(A, B, t){
	return A + t * (B - A);
}


function nextApp(){
	let n = availableApp.splice(Math.floor(Math.random() * availableApp.length), 1)[0];
	document.getElementsByClassName("score")[0].innerText = chainApp.length;
	if(undefined == n){
		return win();
	}
	n = n.toString(16);
	while(n.length<2){
		n = "0"+n;
	}
	chainApp.push("0x"+n.toUpperCase());
	document.getElementsByClassName("lvl")[0].innerText = chainApp[chainApp.length-1];
	Close(function(){
		Magnify(375);
		document.getElementsByTagName("IFRAME")[0].src = "../"+chainApp[chainApp.length-1]+"/index.html";
	});
};

function win(){
	document.getElementsByClassName("win")[0].innerText = "YOU WIN";
	Close(function(){
		var target = document.getElementsByClassName("win")[0];
		new Animator(
			500, 
			function(percent){
				target.style.fontSize = (this.FS + 50 * Math.sin(
															-1 * Math.PI * lerp(
																1, 0.95, lerp(
																	1, 0.2, Math.abs(
																		Math.sin(
																			0.3 * percent*2*Math.PI
																		)
																	)
																)
															)
														)
										) + "px";
			}, function(){
				this.FS = 20;
			}, function(){
				target.style.fontSize = this.FS + "px";
				this.start();
			}
		).start();
	});
	return ;
}

function prevApp(){
	availableApp.push(parseInt(chainApp.pop(), 16));
	document.getElementsByClassName("lvl")[0].innerText = chainApp[chainApp.length-1];
	Close(function(){
		Minify(375);
		document.getElementsByClassName("score")[0].innerText = chainApp.length-1;
		document.getElementsByTagName("IFRAME")[0].src = "../"+chainApp[chainApp.length-1]+"/index.html";
	})
};

window.onmessage = function(e){
	if(e.data == "SUCCESS"){
		clearTimeout(timeout);
		nextApp();
	}
}

document.addEventListener("DOMContentLoaded", function(){
	nextApp();
	function run(){
		Animator.update();
		requestAnimationFrame(run);
	}
	requestAnimationFrame(run);

	document.getElementsByTagName("IFRAME")[0].onload = function(){
		setTimeout(function(){
			Open(function(){
				clearTimeout(timeout);
				timeout = setTimeout(function(){
					prevApp();
				}, maxAppDuration)
			});
		}, 750);
	}

});



function Magnify(time){
	var target = document.getElementsByClassName("score")[0];
	new Animator(
		time*2, 
		function(percent){
			target.style.fontSize = (this.FS + 20 * Math.sin(Math.PI * percent)) + "px";
		}, function(){
			this.FS = 20;
		}, function(){
			target.style.fontSize = this.FS + "px";
		}
	).start();
}

function Minify(time){
	var target = document.getElementsByClassName("score")[0];
	new Animator(
		time*2, 
		function(percent){
			target.style.fontSize = (this.FS - 10 * Math.sin(Math.PI * percent)) + "px";
		}, function(){
			this.FS = 20;
		}, function(){
			target.style.fontSize = this.FS + "px";
		}
	).start();
}

function Close(callback){
	var target = document.getElementsByTagName("IFRAME")[0];
	var wrapper = document.getElementsByClassName("wrapper")[0];
	new Animator(
		500, 
		function(percent){
			percent = Math.pow(percent, 0.5)
			//wrapper.style.opacity = percent;
			wrapper.style.height = ((1-percent) * 256)+"px";
			target.style.marginTop = (-1 * (percent) * 128)+"px";
		}, function(){}, function(){
			//wrapper.style.opacity = 0;
			wrapper.style.height = "0px";
			target.style.marginTop = "-128px";
			if(callback)callback();
		}
	).start();
}

function Open(callback){
	var target = document.getElementsByTagName("IFRAME")[0];
	var wrapper = document.getElementsByClassName("wrapper")[0];
	new Animator(
		500, 
		function(percent){
			percent = Math.pow(percent, 2)
			//wrapper.style.opacity = percent;
			wrapper.style.height = ((percent) * 256)+"px";
			target.style.marginTop = (-1 * (1-percent) * 128)+"px";
		},
		function(){},
		function(){
			//wrapper.style.opacity = 1;
			wrapper.style.height = "256px";
			target.style.marginTop = "0px";
			if(callback)callback();
		}
	).start();
}