// 0x32 onRightClick + onReleased

var x;
var y;
var balle;
var follow = false;

function setup() {
  createCanvas(256, 256);
    rectMode(CENTER);
    x = width / 2;
    y = height / 2;

    balle = new Circle(30,y,20,20);
    goal = new Square(256,y,60,75);

    balle.on("rightClick", function (event){
        follow=true
        goal.on("released", function (event){
        follow = false;
        triggerSuccess();
        });
    });
}


function draw() {
    background("green");
    
    fill("orange");
    goal.draw();
    goal.update(mouseX, mouseY, mouseIsPressed, mouseButton);

    //terrain
    fill(256);
    noStroke();
    rect(x,y,5,256);
    rect(256,y,5,70);
    rect(256,y+35,70,5);
    rect(256,y-35,70,5);
    ellipse(x,y,12,12);
    stroke("white");
    noFill();
    ellipse(x,y,50,50)
    rect(256,y+75,130,0);
    rect(256,y-75,130,0);
    rect(190,y,0,150);
    rect(225,y-30,0,5);
    rect(225,y-20,0,5);
    rect(225,y-10,0,5);
    rect(225,y,0,5);
    rect(225,y+10,0,5);
    rect(225,y+20,0,5);
    rect(225,y+30,0,5);
    noStroke();


    fill(balle.isHover(mouseX, mouseY) ? "yellow" : 'orange');
    balle.draw();
    balle.update(mouseX, mouseY, mouseIsPressed, mouseButton);

    if(follow){
        balle.x = mouseX;
        balle.y = mouseY;
    }
}

function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
    console.log("BRAVO");
}
