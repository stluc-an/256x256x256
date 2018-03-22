var cnv;
var d = 30;
var g;
function setup() {
  cnv = createCanvas(256, 256);
  cnv.mouseMoved(changeSize); // attach listener for
  // activity on canvas only
  d = 10;
  g = 100;
}

function draw() {
  background(g);
  fill(200);
  ellipse(width / 2, height / 2, d, d);
}

// this function fires when mouse moves anywhere on
// page
function mouseMoved() {
  ;
 
}

// this function fires when mouse moves over canvas
function changeSize() {
  d = d + 2;
  if (d > 100) {
    d = 0;
  }
}

function mousePressed() {
  if (d) {
    d = 255;
  } else {
    d = 0;
  }
}