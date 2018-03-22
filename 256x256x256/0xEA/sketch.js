
/*-----------------------------------------*\
    BESOIN : 
    attraper l'événement mouseHover
\*-----------------------------------------*/
var value = 0;
var bouton;
var boutonC;
var alted = 0;
function setup(){
    createCanvas(256, 256); 
    rectMode(CENTER);
    ellipseMode(CENTER);
    noStroke();
    boutonC = new Circle (100,50,30,30);

    bouton = new Square(50, 50, 10, 10);
    bouton.onEnter(function(sq){
         sq.offEnter();
         sq.x= random (width);//quand l'evenement apparait execute cette fonction//
    }); //au moment du Enter il va entrer les parametres au moment ou enter apparait// 
    
}






function draw(){
    background(0);

    fill(value);
    rect(width/2, height/2, 50, 50);


    fill(bouton.isHover(mouseX, mouseY) ? 128 : 255);
    bouton.draw();
    fill(boutonC.isHover(mouseX, mouseY) ? 128 : 255);
    boutonC.draw();

    bouton.update(mouseX,mouseY);


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