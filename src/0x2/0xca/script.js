/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-03-01 13:16:26
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function final(){
top.postMessage('SUCCESS', '*');
	
}

function getSelectionText() {
    var text = "";
    var activeEl = document.activeElement;
    var activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;
    if (
      (activeElTagName == "textarea") || (activeElTagName == "input" &&
      /^(?:text|search|password|tel|url)$/i.test(activeEl.type)) &&
      (typeof activeEl.selectionStart == "number")
    ) {
        text = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd);
    } else if (window.getSelection) {
        text = window.getSelection().toString();
    }
    if (text) {
 	   console.log(text);
 	   final();
	}

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

