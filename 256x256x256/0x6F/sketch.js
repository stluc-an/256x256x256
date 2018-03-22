

var Bouge = false;
var Block= false;

var Cercle;
var Cercle2;

function setup(){
    createCanvas(256, 256); 
    rectMode(CENTER);
    ellipseMode(CENTER);
    noStroke();
    
    Cercle = new Circle(128,200,20,20);
    Cercle.color = color(255,0,0);
    Cercle2 = new Circle(128,100,20,20);
    
    Cercle.on("click",function(event){
    console.log("camarche");
    Bouge= true;
    });
    Cercle.on("still",function(event){
        Cercle.color = color(242,203,75);
    });
    
}


function draw(){
    background(242, 203, 75);
    if (Bouge){
        Cercle.y = mouseY;
    }
    if (Cercle.y <= 100 ){ Bouge = false; 
    } 
     noFill();
    stroke(0);
    Cercle2.draw();
    Cercle2.update(mouseX,mouseY,mouseIsPressed,mouseButton);
    
    noStroke();
    Cercle.draw();
    Cercle.update(mouseX,mouseY,mouseIsPressed,mouseButton);
   
   
}
    

