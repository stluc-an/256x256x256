/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-02-22 11:11:39
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function setup(){
    resize()
}

///////////////////////////////////////


function resize(){
	interact('.block')
	.resizable({
		// resize from all edges and corners
		edges: { left: true, right: true, bottom: true, top: true },
	})
	.on('resizemove', function (event) {
		var target = event.target,
		x = (parseFloat(target.getAttribute('data-x')) || 0),
		y = (parseFloat(target.getAttribute('data-y')) || 0);

		// update the element's style
		target.style.width  = event.rect.width + 'px';
		target.style.height = event.rect.height + 'px';

		// translate when resizing from top or left edges
		x += event.deltaRect.left;
		y += event.deltaRect.top;

		target.style.webkitTransform = target.style.transform =
		'translate(' + x + 'px,' + y + 'px)';

		target.setAttribute('data-x', x);
		target.setAttribute('data-y', y);
		//target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height);

		if(event.rect.width > 100 && event.rect.height > 100){
			var input = document.querySelector("input");
            input.classList.remove("hide");
	       input.onkeyup = changeHandler;
		}
	});
}

function changeHandler (event){
	var txt = event.target.value;
	var h1 = document.querySelector("h1");
	h1.innerText = txt;
	if(txt == "bonjour"){
		top.postMessage('SUCCESS', '*');
		alert("SUPER");
	}
}


