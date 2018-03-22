var monRond;
var monRond2;
var monRondfin
var follow = false;
var follow2 = false;
var enbas = false ;

function setup(){
    createCanvas(256, 256);
    background(255, 102, 153);
    noStroke();
    ellipseMode(CENTER);
  
    monRond = new Circle(50, 60, 50,50);
    monRond2 = new Circle(195, 105,50, 50);
    monRondfin = new Circle(195, 200, 50, 500);
   
    monRond2.color = color(0,0,0,0);
    monRond.color = color(55, 123, 134);
    monRondfin.color = color(112, 43, 137);
   
    monRond.on("enter", function (event){
         monRond.color = color(102, 255, 210);
    });
    monRond.on("leave", function (event){
          monRond.color = color(55, 123, 134);
    });

    monRond.on("drag", function(event){
    	follow = true;
    });

     monRond.on("drop", function(event){
    	follow = false;
    	enbas = true ; 

    });


  	
    
    
}



function draw(){
    background(109, 148, 118);
    noFill();
    strokeWeight(4);
    stroke(102, 255, 210);
    monRond2.draw();
    monRond2.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    
    noStroke();
     monRond.draw();
     monRond.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    
    if(follow){
        monRond.x = mouseX;
         monRond.y = mouseY;
    }

    if(follow2){
  
    	monRondfin.y = mouseY
    }


    if(enbas){
    	monRond = new Circle(195, 200, 0,0);
    	

    	noStroke();
    	 monRondfin.draw();
    	 monRondfin.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    	
    	 monRondfin.on("enter", function (event){
         	monRondfin.color = color(102, 255, 210);
        	 follow2 = true;

        	 monRond2.on("enter", function (event){
        	 monRondfin.color = color(18,246,71);
             triggerSuccess();
       		 });
   		 });
    }
    
       
}
  function triggerSuccess(){
     top.postMessage('SUCCESS','*');
      console.log("BRAVO");
 } 


