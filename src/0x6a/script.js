document.addEventListener("DOMContentLoaded", setup);

function tapHandler (event){
  top.postMessage('SUCCESS', '*');
  console.log("tapHandler");
}

function setup(){
  var scale = 1,
      gestureArea = document.querySelector('#pinch-area'),
      scaleElement = document.querySelector('#toPinch'),
      resetTimeout;

  interact(gestureArea)
    .gesturable({
      onmove: function (event) {
        scale = scale * (1 + event.ds);
        scaleElement.style.webkitTransform =
        scaleElement.style.transform =
          'scale(' + scale + ')';

        
      },
      onend: function (event) {
        alert("Tourner c'est bien.");
      }
    });

    if (!window.DeviceOrientationEvent) {
    return alert("NO DeviceOrientationEvent");
  }

  window.ondeviceorientation =  function(event) {
    // alpha: rotation around z-axis
    var rotateDegrees = ((event.alpha/360) + 1) % 1;
    // gamma: left to right
    var leftToRight = ((event.gamma/360) + 1) % 1;
    // beta: front back motion
    var frontToBack = ((event.beta/360) + 1) % 1;

    drawProgress(frontToBack, document.querySelector(".x circle"));
    drawProgress(leftToRight, document.querySelector(".y circle"));
    drawProgress(rotateDegrees, document.querySelector(".z circle"));
  };
}

document.addEventListener("DOMContentLoaded", setup);

function resizedHandler(){
  top.postMessage('SUCCESS', '*');
  console.log("resizedHandler");
}

/*function setup(){
  if (!window.DeviceOrientationEvent) {
    return alert("NO DeviceOrientationEvent");
  }

  window.ondeviceorientation =  function(event) {
    // alpha: rotation around z-axis
    var rotateDegrees = ((event.alpha/360) + 1) % 1;
    // gamma: left to right
    var leftToRight = ((event.gamma/360) + 1) % 1;
    // beta: front back motion
    var frontToBack = ((event.beta/360) + 1) % 1;

    drawProgress(frontToBack, document.querySelector(".x circle"));
    drawProgress(leftToRight, document.querySelector(".y circle"));
    drawProgress(rotateDegrees, document.querySelector(".z circle"));
  };
}*/

function drawProgress(ratio, target){
  var twoPi =  Math.PI * 2;
  var halfPi =  Math.PI * 0.5;
  var width = 65;
  var angle = ratio * twoPi;
  var radius = width * 0.5 - 5;
  var offset = width * 0.5;

  var x = offset + radius * Math.cos(angle-halfPi);
  var y = offset + radius * Math.sin(angle-halfPi);
  
  target.setAttribute("cx", x)
  target.setAttribute("cy", y)
}

