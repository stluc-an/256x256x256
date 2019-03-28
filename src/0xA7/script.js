/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:06:22
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

var initX;
var initY;
var initZ;
var t0;
var initFlag = true;
function setup(){
	t0 = (new Date()).getTime();
	if (!window.DeviceOrientationEvent) {
		return alert("NO DeviceOrientationEvent");
	}

	window.ondeviceorientation =  function(event) {
		// alpha: rotation around z-axis
		var z = (event.alpha/360);
		// gamma: left to right
		var y = (event.gamma/360);
		// beta: front back motion
		var x = (event.beta/360);
		if(initFlag &&  (new Date()).getTime() - t0 > 1000 ) {

		 initX = x;
		 initY = y;
		 initZ = z;
		 initFlag = false;
		}



		if(!initFlag){
			if(Math.abs(initX - x) > 0.25 || Math.abs(initY - y) > 0.25 || Math.abs(initZ - z) > 0.25){
				startHold();
			}
		}


		//document.querySelector("._x").innerText = Math.abs(initX - x);
		//document.querySelector("._y").innerText = Math.abs(initY - y);
		//document.querySelector("._z").innerText = Math.abs(initZ - z);

	};
}


function tapHandler (event){
	top.postMessage('SUCCESS', '*');
	console.log("tapHandler");
	event.target.style.backgroundColor="yellow";
}

function startHold(){
	window.ondeviceorientation = null;
	interact('.trigger')
	.on("hold", tapHandler);
	var trig = document.querySelector(".trigger");
    trig.classList.remove("hide")
}
