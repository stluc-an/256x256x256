/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:06:22
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function tapHandler (event){
	top.postMessage('SUCCESS', '*');
	console.log("tapHandler");
}

function setup(){
	interact('.trigger')
	.on("tap", tapHandler)
}

interact('.tap-target')
  .on('tap', function (event) {
    event.currentTarget.classList.toggle('switch-bg');
    event.preventDefault();
  })
  .on('doubletap', function (event) {
    event.currentTarget.classList.toggle('large');
    event.currentTarget.classList.remove('rotate');
    event.preventDefault();
  })
  .on('hold', function (event) {
   event.currentTarget.classList.toggle('rotate');
    event.currentTarget.classList.remove('large');
 });

  //var angle = 0;

//interact('#rotate-area').gesturable({
  //onmove: function (event) {
   // var arrow = document.getElementById('arrow');

   // angle += event.da;

   // arrow.style.webkitTransform =
   // arrow.style.transform =
   //   'rotate(' + angle + 'deg)';

   // document.getElementById('angle-info').textContent =
    //  angle.toFixed(2) + '\u00b0';
//  }
//});