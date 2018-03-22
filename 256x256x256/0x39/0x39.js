var xoff1 = 0; 
var yoff2 = 10000;
var bouton;
var pressed = false;
var droite = false;
var follow = false;

function setup() {
  createCanvas(256 ,256 );
  background (51);
  
  bouton = new Circle(170, 120, 17,17);
  bouton.color = color (230,70,150);
bouton1 = new Circle(160, 120, 17,17);
  bouton1.color = color (51);
    
    
    bouton.on ("enter", function(event){
    	bouton.x = (174);
    
    });
    bouton.on ("leave", function(event){
        bouton.x = (170);
    });
  
    bouton.on("rightClick", function(event){
        bouton.color = color (230,170,230);
    	bouton.off ("leave");
    	bouton.off ("enter");
    bouton.on("pressed", function(event){
    	follow =true;
    	droite = true ;	
    });
    });
}
    function draw() {
        background (51);
         noStroke();
     bouton.draw();
     bouton.update(mouseX, mouseY, mouseIsPressed, mouseButton);
     bouton1.draw();
     bouton1.update(mouseX, mouseY, mouseIsPressed, mouseButton);

     if(follow){
         bouton.x = mouseX;
    }

    if (bouton.x >=220){
    	triggerSuccess();
    	print("caca");
 
    }
        //var x = random(width);
    /*if (pressed) {
    	bouton.x = map(noise(xoff1), 0,1,0, width);
    	bouton.y = map(noise(yoff2), 0 , 1 ,0, height);
    	xoff1 += 0.02;
    	yoff2 += 0.03;
    }*/
    fill (20,230,150,60);
    rect (230,20,2,210);

    if (droite)
{ fill (20,230,150,75);
    rect (210,20,1,210); 
ellipse (220,30,17,17);
ellipse (220,60,17,17);
push ();
fill (230,170,230);
ellipse (220,120,17,17);
pop();


ellipse (220,180,17,17);
ellipse (220,210,17,17);


}   

     
    }

function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
}


