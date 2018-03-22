var xoff1 = 0; 
var yoff2 = 10000;
var bouton;
var pressed = false;


function setup() {
  createCanvas(256 ,256 );
  background (51);
  
  bouton = new Circle(170, 120, 17,17);
  bouton.color = color (230,70,150);

    
    
    bouton.on("moveRight", function(event){
    	bouton.d = 2 ;
        bouton.color = color (250,223,120);
        bouton.on("pressed", function(event){
        bouton.d = 0.7;
        pressed = true;
        triggerSuccess() ;
        });
    });
}
    function draw() {
        //background (51);
         noStroke();
     bouton.draw();
     bouton.update(mouseX, mouseY, mouseIsPressed, mouseButton);
        //var x = random(width);
    if (pressed) {
    	bouton.x = map(noise(xoff1), 0,1,0, width);
    	bouton.y = map(noise(yoff2), 0 , 1 ,0, height);
    	xoff1 += 0.02;
    	yoff2 += 0.03;
    }
   rect (90,120,40,1);
   line(95, 120, 105, 105);
   
   
     
    }

function triggerSuccess(){
  console.log('SUCCESS');
    top.postMessage('SUCCESS', '*');
}


