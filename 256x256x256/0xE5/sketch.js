var monCarre;
var monRond;
var Carre = false;

var follow = false;
var dropper = false;

var indice = true;
var fond = true;
var fond2 = false;






function setup(){
	 fond = loadImage("indice.jpg");

    createCanvas(256, 256);
    noStroke();
    ellipseMode(CENTER);
  
 	 monRond = new Circle (50,50,30,30);
 	 monRond.color = color(240,52,209);
    
    monCarre = new Square(50, 50, 50, 50);
 
   	monCarre.color = color(240,52,209);


   
   
   
   	 monRond.on("metaKey", function (event){
    	Carre = true;
    	

    });

   	monCarre.on("drag", function (event){
   	 	follow = true;
   	 
    	

    });

   	 monCarre.on("drop", function (event){
   	 	 	dropper = true;
   	 	 	follow = false;
   	 	 	  triggerSuccess();
    	

    });







  	
    
    
}



function draw(){
  if(indice){
    background(fond);
  }
  if(fond2){
    background(108, 240, 232);
  }
    rectMode(CENTER)
    noFill();
    strokeWeight(4);
    stroke(240,52,209);

    line(90, 160, 90, 240)
    line(90, 240, 166, 240);
    line(166,240,166 ,160)
  



    
    noStroke();
     monRond.draw();
     monRond.update(mouseX, mouseY, mouseIsPressed, mouseButton);

   

     if(Carre){
     	monRond = new Circle (50,50,0,0);
     	  monCarre.draw();
     	monCarre.update(mouseX, mouseY, mouseIsPressed, mouseButton);
      indice = false;
      fond2 = true;

     }

     if(follow){
     	monCarre.x = mouseX;
     	monCarre.y = mouseY;
     }

     if(dropper){
     	 monCarre = new Square(128, 200, 50, 50);
     	 monCarre.color = color(240,52,209);

     }
    
 
 
}


function triggerSuccess(){
  top.postMessage('SUCCESS','*');
  console.log("BRAVO");
 }