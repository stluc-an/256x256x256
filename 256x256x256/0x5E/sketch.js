
/*-----------------------------------------*\
    BESOIN : 
    attraper l'événement mouseHover
\*-----------------------------------------*/
var value = 0;
var lastY = 0;
var bouton;

var alted = 0;
function setup(){
    createCanvas(256, 256); 
    rectMode(CENTER);
    ellipseMode(CENTER);
    noStroke();
    

  
}






function draw(){
    
    background(18,189,50);
    fill(value);
    

    fill(value);
    rect(width/2, height/2, 100, 100);



   


}

function keyPressed() {
    if (keyCode === ENTER) {
    if (alted === 0){
      console.log ("blah");
      value = 255;
      alted = 1;
    } else if (keyCode === ENTER){
    if (alted === 1){
      console.log ("bleh");
      value = 0;
      alted = 0;
    }
  }
  }




}

  

function touchMoved() {
   if ( abs(mouseY-lastY)>5 ) { //abs = valeur absolue
     value = random(255);

   }


   lastY=mouseY;

}
 

