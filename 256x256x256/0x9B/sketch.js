var fillVal = 255;
var isHover = false;


function setup(){
                    createCanvas(256, 256);
                    rectMode(CENTER);
                    ellipseMode(CENTER);
    
                }

function draw(){
                    background(250, 160, 355);
                    fill(fillVal);
                    noStroke();
                    ellipse(128,128,70,70);   
    
                    if (mouseX>93 && mouseY>93 && mouseX<163 && mouseY<163) {
                        rect(128, 128, 90, 90);
                        isHover = true;
                    } else {
                        ellipse(128, 128, 90, 90);
                        isHover = false;
                     }




  //the difference between previous and
  //current y position is the vertical mouse speed
  var speed = abs(winMouseY - pwinMouseY);
  //change the size of the circle
  //according to the vertical speed
  if (mouseX > 128) {
   
    ellipse(50 + mouseX, 50 + mouseY, 10 + speed * 5, 10 + speed * 5);
    
  }
  if (mouseY > 128){
  rect(50 + mouseX, 50 + mouseY, 10 + speed * 5, 10 + speed * 5);
  
}
    
                    print(mouseIsPressed); }

function keyPressed() {
  if (isHover === true){
    if (keyCode ===32) {
    fillVal = 100;}}
  }

 
