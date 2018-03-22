
function setup()
{
  createCanvas(256, 256);
  background(255, 255, 255);
  smooth();
  frameRate(60);
  
  diameter = 1;
  
  fill(255, 0, 0);
}

function draw()
{ 
  background(255, 255, 255);
 
  ellipse(128, 128, diameter, diameter);
}

function mouseMoved() {   diameter = mouseX;
            
                            if (diameter <= 100) {diameter = 100};
                        }
