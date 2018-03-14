
/*-----------------------------------------*\
    BESOIN : 
    attraper l'événement mouseHover
\*-----------------------------------------*/
var bouton;

function setup(){
    createCanvas(256, 256); 
    rectMode(CENTER);
    ellipseMode(CENTER);
    noStroke();

    bouton = new Circle(width/2, height/2, 100);
    
    bouton.on("pressed", function(event){
        console.log(event);
        bouton.on("moveLeft", function(event){
            console.log(event);
        });
    });

    bouton.on("metaKey", function(event){
        console.log(event);
    });
}

function draw(){
    background(0);
    bouton.draw();
    bouton.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    Animator.update();
}

function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
}
