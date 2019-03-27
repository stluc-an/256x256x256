/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:06:22
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function success(event){
  var cutCarrot=document.querySelector('.cutCarrot');
  cutCarrot.classList.remove('hidden');
	top.postMessage('SUCCESS', '*');
	console.log("yo");
}

function setup(){
  interact('.target1')
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
    resizedHandler();
  })

}

function resizedHandler(){

  var carrot=document.querySelector(".target2");
  carrot.classList.remove("hidden");
  swipe();
}

function swipe(){
  var swipe = new Hammer(document);
  swipe.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
  // detect swipe and call to a function
  swipe.on('swiperight swipeleft swipeup swipedown', function(e) {
      alert(e.type);

    if(e.type == 'swiperight'){}
    if(e.type == 'swipeleft'){}
    if(e.type == 'swipeup'){}
    if(e.type == 'swipedown'){}

  });

}
