var fillVal = 169;
var isHover = false;

function setup() {
    
    createCanvas(256, 256);
    rectMode(CENTER);

}


function draw() {
    
    background(123, 45, 78);
    
    fill(fillVal);
    
    noStroke();
    
    if (mouseY>156){ rect(123, mouseY, 50, 50);
                        isHover = true;
                   
                   
                        }else{ ellipse(123, mouseY, 50, 50);
                           isHover = false;  
                             }
    
                    print(mouseIsPressed); }

function keyPressed() {
  if (isHover === true){
    if (keyCode ===32) {
        
        fillVal = 234;}}
        
        
  }

 
 
