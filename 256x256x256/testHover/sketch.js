
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
    boutonC = new Circle(100, 50, 30, 30);
    

    bouton = new Square(50, 50, 50, 50);
    bouton.onEnter(function (sq){
        sq.offEnter();
        sq.x = random(width);
    });


}


function draw(){
    background(0);
    fill(bouton.isHover(mouseX, mouseY) ? 128 : 255);
    bouton.draw();
    fill(boutonC.isHover(mouseX, mouseY) ? 128 : 255);
    boutonC.draw();

    bouton.update(mouseX, mouseY);
}