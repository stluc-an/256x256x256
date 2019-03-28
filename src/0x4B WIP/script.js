  var red;

document.addEventListener("DOMContentLoaded",Redirect);

function Redirect(){
 red = document.getElementById('Redirect')
}



interact('.resize')
.resizable({
    // resize from all edges and corners
    edges: { 
        left: true, 
        right: true, 
        bottom: true, 
        top: true 
    }
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
    target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height);


    if(event.rect.width >= target.parentElement.offsetWidth){
         target.style.width  = target.parentElement.offsetWidth + 'px';
    }
    
    if(event.rect.height >= target.parentElement.offsetHeight){
        target.style.height  = target.parentElement.offsetHeight + 'px';
        Hiding();
    }
});
         
     
     function Hiding(){
        red.classList.remove('hide');   
     };