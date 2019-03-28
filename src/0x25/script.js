/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-03-28 15:03:29
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function setup(){
	var trigger = interact('.trigger');
	trigger.draggable({onmove: dragMoveHandler
	});
		// call this function on every dragmove event
		
}

function dragMoveHandler (event){
	
	var target = event.target;
	// keep the dragged position in the data-x/data-y attributes
	//target.getAttribute('data-x')
	var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
	var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
	console.log(x, y);

	// translate the element
	target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
	// update the posiion attributes
	target.setAttribute('data-x', x);
	target.setAttribute('data-y', y);


	interact('#rotate-area').gesturable({
		onmove: function (event) {
			var arrow = document.querySelector('#toRot');

			angle += event.da;
			arrow.style.webkitTransform = arrow.style.transform = 'rotate(' + angle + 'deg)';

			document.querySelector('#angle-info').textContent = angle.toFixed(2) + '\u00b0';
			if(rotate > 100 && rotate < 180){
				rotateHandler();
			}
		}
	});
	
} 

function rotateHandler(){
	var angle = 0;
	console.log("dragEndHandler");
	top.postMessage('SUCCESS', '*');
	console.log("resizedHandler");
}
