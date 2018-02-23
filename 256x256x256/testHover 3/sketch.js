
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
    bouton = new Square(50, 50, 50, 50);

    bouton.on("enter", enterAction);
    bouton.onLeave(function(){
        bouton.on("enter", enterAction);
    });
    boutonC = new Circle(100, 50, 30, 30);
}
function enterAction (square){
    bouton.off("enter");
    let i = setInterval(function(){
        square.w += cos(millis()*0.01) * 5
        square.h = square.w;
        square.half_h = square.half_w = square.h / 2;
    }, 25);
    setTimeout(function(){
        clearInterval(i);
    }, 500)
}
function draw(){
    background(0);
    fill(bouton.isHover(mouseX, mouseY) ? 128 : 255);
    bouton.draw();
    bouton.update(mouseX, mouseY);
    fill(boutonC.isHover(mouseX, mouseY) ? 128 : 255);
    boutonC.draw();
}