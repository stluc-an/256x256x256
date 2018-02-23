
/*-----------------------------------------*\
    BESOIN : 
    attraper l'événement mouseHover
\*-----------------------------------------*/
var bouton;
var boutonC;
function setup(){
    createCanvas(256, 256); 
    rectMode(CENTER);
    ellipseMode(CENTER);
    noStroke();
    bouton = new Square(50, 50, 10, 10);
    boutonC = new Circle(100, 50, 30, 30);
}
function draw(){
    background(0);
    fill(bouton.isHover(mouseX, mouseY) ? 128 : 255);
    bouton.draw();
    fill(boutonC.isHover(mouseX, mouseY) ? 128 : 255);
    boutonC.draw();
}