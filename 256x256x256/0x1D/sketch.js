var value = 0;


var myCanvas;


function setup() {
  createCanvas (256,256);
  //myCanvas = createCanvas(100, 100);//
  noStroke();
  fill(237, 34, 93);
}



function draw() {
  background(185,189,50);
  fill(value);
  rect(25, 25, 50, 50);
	
  clear();
 
  var speed = abs(winMouseX - pwinMouseX);

  var speed = abs(winMouseY - pwinMouseY);
  
  ellipse(50, 50, 10 + speed * 5, 10 + speed * 5);
  
  
}




function mousePressed() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}







