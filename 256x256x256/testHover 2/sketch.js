
/*-----------------------------------------*\
    BESOIN : 
    attraper l'événement mouseHover
\*-----------------------------------------*/
var square;
function setup(){
    createCanvas(256, 256); 
    rectMode(CENTER);
    noStroke();
    square = new Square(width/2, height/2, 50, 50);
    square.on("pressed", squareOnPressed);
    square.on("released", squareOnReleased);
}

function draw(){
    background(0);
    fill(square.isMouseHover() ? 128 : 255);
    stroke(square.isMousePressed() ? 255 : 128);
    square.draw();   
}

function squareOnPressed(event){
    let w = event.target.w;
    event.target.animator = function(shape){
        let v = w + floor( w * abs( sin( ( (new Date() ).getTime()-event.timestamp) * 0.001 ) ) );
        shape.setW(v);
        shape.setH(v);
        return shape;
    }
}
function squareOnReleased(event){
    event.target.animator = function(shape){};
}

