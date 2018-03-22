var monCarre;

var follow = false;
var enplace = false;

var fond ;
var indice = false;







function setup(){
	 fond = loadImage("indice.jpg");

    createCanvas(256, 256);
    noStroke();
  
  

    
    monCarre = new Square(128, 200, 25, 25);
 
   	monCarre.color = color(240,52,209);


   
   
 

   	monCarre.on("enter", function (event){
   	 	follow = true;
   	 
    	

    });

      monCarre.on("metaKey", function (event){
        if(enplace){
          monCarre.color = color(0,236,236);
          triggerSuccess();
        }
        
      
     
      

    });










  	
    
    
}



function draw(){
    background(202,196,160);
    if(indice){
      background(fond);
    }
    rectMode(CENTER)
    fill(0,236,236);
    rect(128,50,70,70);
    fill(202,196,160);
    rect(128,50,25,25);
    
     noStroke();
     monCarre.draw();
     monCarre.update(mouseX, mouseY, mouseIsPressed, mouseButton);

     if(follow){
      monCarre.y = mouseY;
     }

       if(monCarre.y<=50){
          follow = false;
          enplace =true;
          indice = true;
        }

}
  
  function triggerSuccess(){
     top.postMessage('SUCCESS','*');
      console.log("BRAVO");
 } 
 
 



