
/*-----------------------------------------*\
    BESOIN : 
    attraper l'événement mouseHover
\*-----------------------------------------*/
var bouton;
var fond;
var Bouge = false;
function setup(){
    createCanvas(256, 256); 
    rectMode(CENTER);
    ellipseMode(CENTER);
    noStroke();
    fond = loadImage("img/pia18303_full_1000.jpg")
    bouton = new Circle(width/2, height/2, 100);



    bouton.on("click", function(event){
        Bouge = true;
    });
    
    

    bouton.on("metaKey", function(event){
        console.log(event);
    });
}

function draw(){
    background(fond);


    if(Bouge){
        console.log("Youpie");
    }
    //bouton.x = noise(frameCount * 0.01) * width;
    //bouton.y = noise(frameCount * 0.011) * height;
    bouton.draw();
    bouton.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    Animator.update();
}

function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
    console.log("BRAVO");
}
