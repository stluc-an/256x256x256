/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:06:22
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function tapHandler (event){
  var btnToHide = document.querySelector(".trigger2");
  btnToHide.classList.add("hidden");


  top.postMessage('SUCCESS', '*');
  console.log("tapHandler");
}

function setup (){
interact('.trigger1')
.on('hold', function (event) {
    event.currentTarget.classList.toggle('visibility');
    var trig = document.querySelector(".trigger2");
    trig.classList.remove("hidden")
    startResize();
  });


}

function startResize(){

  interact('.trigger2')
  
  .resizable({
    // resize from all edges and corners
    edges: { left: true, right: true, bottom: true, top: true },

    // keep the edges inside the parent
    restrictEdges: {
      outer: 'parent',
      endOnly: true,
    },

    // minimum size
    restrictSize: {
      min: { width: 50, height: 50 },
    },

    inertia: true,
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
 
  });
}




function step1 (event){
  var btnToHide = document.querySelector(".trigger1");
  btnToHide.classList.add("hidden");

  var btnToShow= document.querySelector(".trigger2");
  btnToShow.classList.remove("hidden");

}