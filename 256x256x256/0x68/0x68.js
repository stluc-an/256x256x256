var xoff1 = 0; 
var yoff2 = 10000;
var bouton;
var pressed = false;
var follow = false;
var follow1 = false;

function setup() {
  createCanvas(256 ,256 );
  background (51);
  
  bouton = new Circle(110, 145, 10, 10);
  bouton.color = color(230,70,150);

    
    bouton.on ("pressed", function(event){
    bouton.d = 15 ;
    follow = true;

    bouton.on("moveUp", function(event){
      follow1 = true;
      follow = true;
      bouton.color = color (250,223,120);


    });
        
        bouton.on("moveLeft", function(event){
        	bouton.x = mouseX;

        	follow = false;
        	rect (105,95,100,50);
        	triggerSuccess();
     });
       
    });
}

    function draw() {
        //background (51);
         noStroke();
     bouton.draw();

         if (follow){
	         bouton.y = mouseY;
         }
         if (follow1){
         	bouton.x = mouseX;

         }

stroke(126);
line(205, 100, 205, 145);
stroke(250,223,120);
line(205, 145, 110, 145);
stroke(126);
line(105, 100,205 , 100);
stroke(250,223,120);
line(105,100, 105, 140);
     bouton.update(mouseX, mouseY, mouseIsPressed, mouseButton);
     
    }

function triggerSuccess(){
  console.log('SUCCESS');
    top.postMessage('SUCCESS', '*');
}


