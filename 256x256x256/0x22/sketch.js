

var b, 
    mousePos,
    pos,
    target,
    vel,
    ctx,
    rad,
    drag,
    speed;

function setup(){
                    createCanvas(256, 256);
                    b = random(255);
    
                }



function draw(){
                    background(b, 150, 200);
    
    
                    strokeWeight(2);
                    stroke(b);
                    fill(b, 127);
                    ellipse(128, 128, 50, 50);    
                }



function mouseClicked() {
  
                            var d = dist(mouseX, mouseY, 128, 128);
                            if (d < 25) {b = random(255);} else {   mousePos = createVector(0,0);
                                                                    pos = createVector(0,0);
                                                                    target = createVector(0,0);
                                                                    vel = createVector(0,0); 
                                                                    drag = 0.76;
                                                                    strength = 0.15;
                                                                    r = 40; }
}
    
                        








