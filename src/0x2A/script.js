/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:06:22
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function dragMoveHandler (event){
	
    var target = event.target;
    target.setAttribute('data-x', "bonjour ");
    console.log(target.getAttribute('class'));
    var x = (parseFloat(target.getAttribute('data-x')))+ event.dx;
    console.log(x, y);
        
	// keep the dragged position in the data-x/data-y attributes
	 || 0) 
	var y = (parseFloat(target.getAttribute('data-y')) || 0); 
	// translate the element
	target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
	// update the posiion attributes
	target.setAttribute('data-x', x);
	target.setAttribute('data-y', y);
	console.log("dragMoveHandler");
	top.postMessage('SUCCESS', '*');
}
function setup(){
	interact('.trigger')
	.draggable({
		// call this function on every dragmove event
		onmove: dragMoveHandler
	});
}
