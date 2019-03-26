interact('.draggable')
  .draggable({
    inertia: true,
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
    autoScroll: true,

    onmove: dragMoveListener,
    onend: function (event) {
      var textEl = event.target.querySelector('');

      textEl && (textEl.textContent =
        'moved a distance of '
        + (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                     Math.pow(event.pageY - event.y0, 2) | 0))
            .toFixed(2) + 'px');
    }
  });

  function dragMoveListener (event) {
    var target = event.target,

        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';


    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }


  window.dragMoveListener = dragMoveListener;
interact('.dropzone').dropzone({
 
  accept: '#yes-drop',

  overlap: 0.75,



  ondropactivate: function (event) {

    event.target.classList.add('drop-active');
  },
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;

 
    dropzoneElement.classList.add('drop-target');
    draggableElement.classList.add('can-drop');
    draggableElement.textContent = 'Dragged in';
  },
  ondragleave: function (event) {
  
    event.target.classList.remove('drop-target');
    event.relatedTarget.classList.remove('can-drop');
    event.relatedTarget.textContent = 'Dragged out';
  },
  ondrop: function (event) {
    event.relatedTarget.textContent = 'Double-tap me!';
      document.querySelector("#yes-drop").classList.add("hide");
      document.querySelector("#yes-drop").classList.remove("drag-drop");
      document.querySelector("#inner-dropzone").classList.add("hide");
      document.querySelector("button").classList.remove("hide");
      interact('.trigger')
	.on("doubletap", doubleTapHandler)
      function doubleTapHandler (event){
	top.postMessage('SUCCESS', '*');
	console.log("doubleTapHandler");
}
      
  },
  ondropdeactivate: function (event) {
 
    event.target.classList.remove('drop-active');
    event.target.classList.remove('drop-target');
  }
});

interact('.drag-drop')
  .draggable({
    inertia: true,
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
    autoScroll: true,
  
    onmove: dragMoveListener,
  });



