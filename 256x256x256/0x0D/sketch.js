 
var e1, e2 ;


function setup() {
    
    createCanvas(256, 256);
    ellipseMode(CENTER);
    noStroke;
     
    e1 = new Eye(85, 130, 80);
    e2 = new Eye(165, 130, 80);
 
}


function draw() {
    
   background(100, 203, 140);
    
    e1.update(mouseX, mouseY);
    e2.update(mouseX, mouseY);
    
    e1.display();
    e2.display();
}


function Eye(tx, ty, ts) {
    
  this.x = tx;
  this.y = ty;
    
  this.size = ts;
  this.angle = 0;

  this.update = function (mx, my) {
    this.angle = atan2(my - this.y, mx - this.x);
  };

    
  this.display = function () {
      
    push();
    translate(this.x, this.y);
      
    fill(255);
      noStroke();
    ellipse(0, 0, this.size, this.size);
      
    rotate(this.angle);
    fill(180, 134, 0);
      noStroke();
    ellipse(this.size / 4, 0, this.size / 2, this.size / 2);
    pop();
  };
}