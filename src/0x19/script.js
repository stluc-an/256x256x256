/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:05:55
\*----------------------------------------*/

var stopit=0 
var a=1
document.addEventListener("DOMContentLoaded", setup);

function doubleTapHandler (event){
	top.postMessage('SUCCESS', '*');
	console.log("doubleTapHandler");
}

function setup(){
	interact('.trigger')
	.on("doubletap", doubleTapHandler)
	if(!("ondevicemotion" in window)){
		alert("Not Supported");
		return;
	}
	var shakeEvent = new Shake({threshold: 5});
	shakeEvent.start();
	window.onShake = shakeHandler;
   

}


//stop listening
function stopShake(){
    shakeEvent.stop();
}

function shakeHandler(){
    alert("Shaked");
}

function init(which){
stopit=0
shake=which
shake.style.left=0
shake.style.top=0
}

function doubleTapHandler(){
if ((!document.all&&!document.getElementById)||stopit==1)
return
if (a==1){
shake.style.top=parseInt(shake.style.top)+rector+"px"
}
else if (a==2){
shake.style.left=parseInt(shake.style.left)+rector+"px"
}
else if (a==3){
shake.style.top=parseInt(shake.style.top)-rector+"px"
}
else{
shake.style.left=parseInt(shake.style.left)-rector+"px"
}
if (a<4)
a++
else
a=1
setTimeout("rattleimage()",50)
}

function stoprattle(which){
stopit=1
which.style.left=0
which.style.top=0
}
