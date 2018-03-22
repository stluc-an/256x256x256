var rotateuh = true;
var rotateuh1 =false;
var tri = true;
var tri1 =false;
var col = {
	r: 240,
	g: 10,
	b: 190
}

function setup() {
  createCanvas(256 ,256);
  
  bouton = new Circle(110, 130, 30,30);
  bouton.color = color (140,200,250);

    
    
    bouton.on("moveDown", function(event){
    	bouton.color = color (10,210,100);
    	tri = false;
    	tri1= true;
    bouton.on("moveUp", function(event){
    	tri1= false;
        bouton.color = color (200,10,100);
        bouton.d = 50;
        triggerSuccess();
         
        });
    });
}
    function draw() {
        background (51);
        noFill();
        bouton.draw();
        bouton.update(mouseX, mouseY, mouseIsPressed, mouseButton);

        if (tri){
         col.r = random (100,250);
         col.g = random (10, 35);
         col.b = random (109,134);
         fill(col.r, col.g, col.b);
        triangle (100, 150, 110, 180, 120, 150);
         
  
    }

    if (tri1){
        col.r = random (100,250);
        col.g = random (10, 35);
        col.b = random (109,134);
        fill(col.r, col.g, col.b);
    	triangle (100,80,110,60,120,80);

    }
   }
  
function triggerSuccess(){
  console.log("success");
    top.postMessage('SUCCESS', '*');
}


