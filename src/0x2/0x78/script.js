/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-03-01 10:43:22
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function resizedHandler(){
	top.postMessage('SUCCESS', '*');
	console.log("resizedHandler");
}

function setup(){
	if (window.DeviceMotionEvent == undefined) {
        //No accelerometer is present. Use buttons. 
        alert("no accelerometer");
    }
    else {
        alert("accelerometer found");
        window.addEventListener("devicemotion", function(event){
			var aX = event.accelerationIncludingGravity.x*1;
			var aY = event.accelerationIncludingGravity.y*1;
			var aZ = event.accelerationIncludingGravity.z*1;
			//The following two lines are just to calculate a
			// tilt. Not really needed. 
			var xPosition = Math.atan2(aY, aZ);
			var yPosition = Math.atan2(aX, aZ);
			document.querySelector("#X").innerText = xPosition;
			document.querySelector("#Y").innerText = yPosition;
        }, true);
    }

}
