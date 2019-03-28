/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:05:55
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function swipeHandler(){
  top.postMessage('SUCCESS', '*');
  console.log("swipeHandler...");
  console.log("hello");
  alert(Beau gosse);
}

function secondSwipe(){
  var swipe = new Hammer(document.body);
  swipe.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
  // detect swipe and call to a function
  swipe.on('swipeleft', function(e) {
      alert(e.type);

    if(e.type == 'swipeleft'){}
      swipeHandler();
  });
}


function setup(){
  var swipe = new Hammer(document.body);
  swipe.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
  // detect swipe and call to a function
  swipe.on('swiperight', function(e) {
      alert(e.type);

    if(e.type == 'swiperight'){}
      secondSwipe();
  });
}
