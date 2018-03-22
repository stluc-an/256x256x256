var fillVal = 255;
var isHover = false;


function setup(){
                    createCanvas(256, 256);
                    rectMode(CENTER);
                    ellipseMode(CENTER);
    
                }

function draw(){
                    background(250, 200, 125);
                    fill(fillVal);
                    noStroke();
                    ellipse(128,128,70,70);   
    
                    if (mouseX>93 && mouseY>93 && mouseX<163 && mouseY<163) {
                        rect(128, 128, 70, 70);
                        isHover = true;
                    } else {
                        ellipse(128, 128, 70, 70);
                        isHover = false;
                     }
    
                    print(mouseIsPressed); }

function keyPressed() {
  if (isHover === true){
    if (keyCode ===32){
    fillVal = 100;}}}
       
function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
    console.log("BRAVO");
}


    

  