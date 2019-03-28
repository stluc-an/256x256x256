

  function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  document.addEventListener("DOMContentLoaded", setup);
var angle = 0;

var chronoTimeout;
function setup(){

    // target elements with the "draggable" class

    
   // setInterval(animate, 42);
    //requestAnimationFrame(animate);
    
   chronoTimeout = setTimeout(timeoutHandler, 3000);

    
    window.onmousedown = function(){
            clearTimeout(chronoTimeout);
         chronoTimeout = setTimeout(timeoutHandler, 3000);
    }
}

function timeoutHandler(){
    
    // target elements with the "draggable" class
interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {
      var textEl = event.target.querySelector('p');
      final();
      textEl && (textEl.textContent =
        'VOILA! '
        + (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                     Math.pow(event.pageY - event.y0, 2) | 0))
            .toFixed(2) + 'px');
    }
  });
    
}

function final(){
  top.postMessage('SUCCESS', '*');
}

