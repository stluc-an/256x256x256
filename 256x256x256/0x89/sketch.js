
/*-----------------------------------------*\
    BESOIN : 
    attraper l'événement mouseHover
\*-----------------------------------------*/
var square;
var croissance = 0;
function setup(){
    createCanvas(256, 256); 
    rectMode(CENTER);
    noStroke();
    square = new Square(width/2, height/2, 50, 50);
    square.on("moveLeft", function(event){
        square.color = (128, 255, 128);
    });
     square.on("moveRight", function(event){
        square.color = (10, 10, 10);
    });
        square.on("leave", function(event){
        croissance = 0;
        console.log(event);
        square.color = color(255);
        square.colorStroke = color(128);
        triggerSuccess();   
    });
    
       

    

    /*square.on("enter", function(event){
        square.color = color(32);
        square.colorStroke = color(255);
    });*/
    
}

function draw(){
    background(0);
    console.log(croissance);
    square.w = square.w - croissance;
    square.h = square.h + croissance;
    square.half_w = square.half_h = square.h / 2;
    //fill(square.isMouseHover() ? 128 : 255);
   // stroke(square.isMousePressed() ? 255 : 128);
    square.draw();
    
    square.update(mouseX, mouseY, mouseIsPressed, mouseButton);   
}



function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
    console.log("GG");
}

