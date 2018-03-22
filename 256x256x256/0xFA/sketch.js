var maLune;
var mySun
var soleil = false;
var jour = false;


var r =  53;
var g = 41;
var b = 74;

var rouge = false;
var bleu = false;
var vert = false ;


function setup(){
    createCanvas(256, 256);
    background(255, 102, 153);
    noStroke();
    ellipseMode(CENTER);
  
    maLune = new Circle(60,60, 30,30);
 
    maLune.color = color(178, 176, 164);

	mySun = new Circle(210,60, 35,35);
 
    mySun.color = color(255, 246, 112);
   
   
   
    maLune.on("still", function (event){
    	setTimeout(function(){
        	rouge =true;
       		 bleu = true;
        	vert = true;
        	jour = true;
    	},1000);
    });

    maLune.on("hover", function (event){
    	if (b>=240 && b<= 255){
    		soleil = true;
    		 triggerSuccess();
		
        
    	}
    	
    });



    
    
}



function draw(){
    background(r, g, b);
    
    
    noStroke();
     maLune.draw();
     maLune.update(mouseX, mouseY, mouseIsPressed, mouseButton);

     if (jour){
     	background(164, 240, 238);
     	 maLune.draw();
    	 maLune.update(mouseX, mouseY, mouseIsPressed, mouseButton);

     }
    
       if(soleil){
  		 maLune = new Circle(60,60, 0,0);
 
   		 noStroke();
    	 mySun.draw();
     	mySun.update(mouseX, mouseY, mouseIsPressed, mouseButton);
 		}

  	 if(rouge ){

      r = r +1;
      background(r, g, b);
     }
     
     if(vert){
     	g = g + 1 ;
     	background(r, g, b);
     } 
      
     if(bleu){
     	b = b + 1 ;
     	background(r, g, b);
     }
      
    
   

    if(r >= 164){
    	rouge =false;
    }

    if(b >= 240){
    	bleu = false;
    }

    if(g>=238){
    	vert = false;
    }



 
 } 

function triggerSuccess(){
  top.postMessage('SUCCESS','*');
  console.log("BRAVO");
 }