var monCarre;

var taille = false;
var rose = false;

var indice = true;
var indice2= false;

var fond;
var fond2;

var t = 25;




function setup(){
	fond = loadImage("indice.jpg");
	fond2 = loadImage("indice2.jpeg");
	background(fond);

    createCanvas(256, 256);
     noStroke();
    ellipseMode(CENTER);
  
    monCarre = new Square(128, 128, t, t);
 
   	monCarre.color = color(151, 242, 106);


   
   
   
   	 monCarre.on("shake", function (event){
    	taille = true;

    });


   	monCarre.on("metaKey", function (event){
   		if(rose){
    		monCarre.color = color(219,156,223);
    		 triggerSuccess();
    	
    	}

    });





  	
    
    
}



function draw(){
	if(indice){
		background(fond);

	}
	if(indice2){
		background(fond2);
	}
   
    rectMode(CENTER)
    noFill();
    strokeWeight(4);
    stroke(219,156,223);
    rect(128,128, 80,80);



    
    noStroke();
     monCarre.draw();
     monCarre.update(mouseX, mouseY, mouseIsPressed, mouseButton);

     if(taille){
     	t = t + 1;
     	monCarre.w = t;
     	monCarre.h = t;
     	monCarre.half_h = monCarre.half_w = t/2;
     	monCarre.h = t;
   		monCarre.color = color(151, 242, 106);
   		 monCarre.draw();
     	
     }

     if(t>=79){
     	taille = false;
     	rose = true;
     	indice = false;
     	indice2 = true;
     }

    
 
 
}

function triggerSuccess(){
	top.postMessage('SUCCESS','*');
 	console.log("BRAVO");
 }
    
