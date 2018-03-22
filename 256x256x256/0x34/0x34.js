var xoff1 = 0; 
var yoff2 = 10000;
var bouton;
var pressed = true;
var pressed1 = false;
var spot = {
	x : 24,
	y: 36
}
var col = {
	r: 240,
	g: 10,
	b: 190
}
let angle = 0;


function setup() {
  createCanvas(256 ,256 );
  background (51);
  
  bouton = new Circle(128, 128, 40,40);
  bouton.color = color (20,230,150);

    angleMode (DEGREES);

    bouton.on ("hover", function (event){
    	console.log("HOVER");

    });
    bouton.on("rightClick", function(event){
      console.log("rightClick");
    	pressed = false;
        bouton.color = color (230,230,134);

        bouton.on("drag", function(event){
          console.log("drag");
        col.r = (0);
        col.g = (200);
        col.b = (0);
        triggerSuccess();
        pressed1 = true;
  
        });
    });
}
    function draw() {
         background (51);
         noStroke();
         col.r = random (230,250);
         col.g = random (10, 35);
         col.b = random (109,134);
         spot.x = random (0,width);
         spot.y = random (0,height);
         fill (col.r, col.g, col.b);
         ellipse ( spot.x, spot.y,9,2);
     bouton.draw();
     bouton.update(mouseX, mouseY, mouseIsPressed, mouseButton);
        //var x = random(width);
    if (pressed) {
    	bouton.x = map(noise(xoff1), 0,1,0, width);
    	bouton.y = map(noise(yoff2), 0 , 1 ,0, height);
    	xoff1 += 0.001;
    	yoff2 += 0.003;
    }
    if (pressed1) {
    	bouton.x = map(noise(xoff1), 0,1,0, width);
    	bouton.y = map(noise(yoff2), 0 , 1 ,0, height);
    	xoff1 += 0.01;
    	yoff2 += 0.03;
    }
    fill (20,230,150,60);
    rect (230,20,2,210);

/*curve(5, 26, 73, 24, 73, 61, 15, 65);
var steps = 6;
for (var i = 0; i <= steps; i++) {
  var t = i / steps;
  var x = curvePoint(5, 73, 73, 15, t);
  var y = curvePoint(26, 24, 61, 65, t);
  //ellipse(x, y, 5, 5);
  var tx = curveTangent(5, 73, 73, 15, t);
  var ty = curveTangent(26, 24, 61, 65, t);
  var a = atan2(ty, tx);
  a -= PI / 2.0;
  line(x, y, cos(a) * 8 + x, sin(a) * 8 + y);
}
 rect(150,150, 20,3);
 translate (100,100);

 angle = angle + 1; 
 if (angle > width) {
 	angle = 0;
 }*/
   
     
    }

function triggerSuccess(){
    console.log("SUCCESS");
    top.postMessage('SUCCESS', '*');
}


