

function setup() {
  //use a variable to store a pointer to the canvas
  createCanvas (256,256);
  noStroke();
  fill(237, 34, 93);
}

function draw() {
  background(180,189,50);
  clear();
  //the difference between previous and
  //current y position is the vertical mouse speed
  var speed = abs(winMouseY - pwinMouseY);
  //change the size of the circle
  //according to the vertical speed
  if (mouseX < 128) {
   
    ellipse(-50 + mouseX, 50 + mouseY, 10 + speed * 5, 10 + speed * 5);
    
  }
  if (mouseY > 128){
  rect(50 + mouseX, 50 + mouseY, 10 + speed * 5, 10 + speed * 5);
  
}
}
 