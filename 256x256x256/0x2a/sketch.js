// Ox2a OnReleased + OnHover
var x;
var y;

var bouton;
var dropZone;
var released;
var hover;
var follow = false;

function setup() {
  createCanvas(256, 256);;
    x = width / 2;
    y = height / 2;
    rectMode(CENTER);

    bouton = new Square(50, 60, 30, 30);
    dropZone = new Square(x + 75, y, 30, 30);

    bouton.on("drag", function(event){
    follow = true;
    });

    bouton.on("drop", function(event){
    follow = false;
    });

    dropZone.on("hover", function (event){
            bouton.on("released", function (event){
            follow = false;
            triggerSuccess();
             });
         });
}

function draw() {
    background(0);
    
    //zone de départ
    
    stroke("white");
    line (100,0,100,10);
    line (100,20,100,30);
    line (100,40,100,50);
    line (100,60,100,70);
    line (100,80,100,90);
    line (100,100,100,110);
    line (100,120,100,127);

    line (0,y,10,y);
    line (20,y,30,y);
    line (40,y,50,y);
    line (60,y,70,y);
    line (80,y,90,y);
    line (95,y,100,y);

    // carrés
    noStroke();
    fill('orange');
    rect(x + 75, y - 75, 30, 30);
    rect(x + 75, y + 75, 30, 30);
    rect(x + 20, y - 75, 30, 30);
    rect(x + 20, y, 30, 30);
    rect(x + 20, y + 75, 30, 30);

    //carré de fin
    
    //rect(x + 75, y, 30, 30);
    //fill(bouton1.isHover(mouseX, mouseY) ? "yellow" : 'orange');
    fill(0);
    dropZone.update(mouseX, mouseY, mouseIsPressed, mouseButton);   
    dropZone.draw();


    fill(bouton.isHover(mouseX, mouseY) ? "yellow" : 'orange');
    bouton.draw();
    bouton.update(mouseX, mouseY, mouseIsPressed, mouseButton);



    if(follow){
        bouton.x = mouseX;
        bouton.y = mouseY;
    }

}

function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
    console.log("BRAVO");
}
