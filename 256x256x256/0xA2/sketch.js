
/*-----------------------------------------*\
    BESOIN : 
    attraper l'événement mouseHover
\*-----------------------------------------*/
var value = 0;
var bouton;

function setup(){
    createCanvas(256, 256); 
    rectMode(CENTER);
    ellipseMode(CENTER);
    noStroke();
    

    bouton = new Square(50, 50, 50, 50);
    bouton.onEnter(function(sq){
         sq.offEnter();
         sq.x= random (width);//quand l'evenement apparait execute cette fonction//
    }); //au moment du Enter il va entrer les parametres au moment ou enter apparait//
    
}


function draw(){
    background(175,50,5);

    fill(value);
    rect(width/2, height/2, 100, 100);

    fill(bouton.isHover(mouseX, mouseY) ? 128 : 255);
    bouton.draw();
  

    bouton.update(mouseX,mouseY);
}


function mouseReleased() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}