


var Bouge = false;
var Block= false;

var Cercle;
var Cercle2;
var Cercle3;

function setup(){
    createCanvas(256, 256); 
    rectMode(CENTER);
    ellipseMode(CENTER);
    noStroke();
    
    Cercle = new Circle(128,120,60,60);
        Cercle2 = new Circle(128,160,40,40);
    Cercle3 = new Circle(128,180,30,30);

        Cercle2.color = color(255,0,0);
    Cercle3.color = color(255,0,0);
    Cercle.color = color(255,0,0);

    Cercle.on("moveDown",function(event){
//    console.log("camarche");
               Cercle.color = color(0,255,0);
  

    
    });
     Cercle2.on("moveDown",function(event){
//    console.log("camarche");
    Cercle2.color = color(0,255,0);

    
    }); Cercle3.on("moveDown",function(event){
//    console.log("camarche");
   
    Cercle3.color = color(0,255,200);

    
    });
    Cercle3.on("shake",function(event){
        Cercle3 = new Circle(2555,2555,20,20);
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
   
    noStroke();
    Cercle.draw();
    Cercle.update(mouseX,mouseY,mouseIsPressed,mouseButton);
   Cercle2.draw();
    Cercle2.update(mouseX,mouseY,mouseIsPressed,mouseButton);
   Cercle3.draw();
    Cercle3.update(mouseX,mouseY,mouseIsPressed,mouseButton);

   
   
}
    

