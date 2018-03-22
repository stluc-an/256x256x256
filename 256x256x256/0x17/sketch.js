
var value = 0;
var lastY = 0;

function setup(){
 createCanvas(256, 256); 

    
}


function draw() {
  background(18,189,50);
  fill(value);
  rect(25, 25, 50, 50);
  
}
function touchMoved() {
   if ( abs(mouseY-lastY)>5 ) { //abs = valeur absolue
     value = random(255);

   }


   lastY=mouseY;

}
 



 

