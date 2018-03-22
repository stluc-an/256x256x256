// 0x7c onMoveDown + onLeave

var x;
var y;

var follow = false;

var mouth;

var dent1;
var dent2;
var dent3;
var dent4;
var dent5;
var dent6;
var dent7;
var dent8;
var dent9;
var dent10;

var fruit;

function setup() {
  createCanvas(256, 256);
    x = width / 2;
    y = height / 2;
    rectMode(CENTER);
    ellipseMode(CENTER);

    //bouche
    mouth = new Square(x,y,256,110);

    //dents
    dent1 = new Square(x +120,y-40,30,30);
    dent3 = new Square(x,y-40,30,30);
    dent4 = new Square(x -60,y-40,30,30);
    dent5 = new Square(x -120,y-40,30,30);
    dent6 = new Square(x +90,y+40,30,30);
    dent7 = new Square(x +30,y+40,30,30);
    dent8 = new Square(x,y+40,30,30);
    dent9 = new Square(x -30,y+40,30,30);
    dent10 = new Square(x -90,y+40,30,30);

    carrie = new Square(x +60,y-40,30,30);

    carrie.on("drag", function(event){
        follow = true;
    });

    carrie.on("drop", function(event){
        follow = false;
    });

    carrie.on("moveDown", function (event){
        mouth.on("leave", function (event){
        triggerSuccess();
        });
    });

}

function draw() {
    background('orange');
    fill(204, 0, 0);
    mouth.draw();
    mouth.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    fill('green');
    rect(x-20,y+30,100,50);
    
    //yeux
    fill(256);
    rect(x-75,30,80,30);
    rect(x+75,30,80,30);
    fill(0);
    rect(x-90,35,30,20);
    rect(x+90,35,30,20);

    
    //nez
    ellipse(x-10,55,5,5)
    ellipse(x+10,55,5,5)
    
    //dents hover
    fill(dent1.isHover(mouseX, mouseY) ? 128 : 255);
    dent1.draw();
    fill(dent3.isHover(mouseX, mouseY) ? 128 : 255);
    dent3.draw();
    fill(dent4.isHover(mouseX, mouseY) ? 128 : 255);
    dent4.draw();
    fill(dent5.isHover(mouseX, mouseY) ? 128 : 255);
    dent5.draw();
    fill(dent6.isHover(mouseX, mouseY) ? 128 : 255);
    dent6.draw();
    fill(dent7.isHover(mouseX, mouseY) ? 128 : 255);
    dent7.draw();
    fill(dent8.isHover(mouseX, mouseY) ? 128 : 255);
    dent8.draw();
    fill(dent9.isHover(mouseX, mouseY) ? 128 : 255);
    dent9.draw();
    fill(dent10.isHover(mouseX, mouseY) ? 128 : 255);
    dent10.draw();
    
    //fruit hover
    fill(carrie.isHover(mouseX, mouseY) ? "yellow" : 0);
    carrie.draw();
    carrie.update(mouseX, mouseY, mouseIsPressed, mouseButton);

    if(follow){
        carrie.y = mouseY;
    }

}

function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
    console.log("BRAVO");
    }