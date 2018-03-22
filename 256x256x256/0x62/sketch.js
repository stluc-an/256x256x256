var monRond;
//var monRond2;
var follow = false;
var artifice = false;


function setup(){
    createCanvas(256, 256);
    background(255, 102, 153);
    noStroke();
    ellipseMode(CENTER);
  
    monRond = new Circle(128, 210, 15,15);
 
    monRond.color = color(91, 33, 43);

    //monRond2 = new Circle(128, 60, 15,15);
 
    //monRond2.color = color(222, 0, 0);
   
   
    monRond.on("enter", function (event){
         monRond.color = color(179,20,62);

         if(monRond.y <= 70 && monRond.y >= 50){
         	monRond.color = color(255, 240,240);
         }

    });
    monRond.on("leave", function (event){
          monRond.color = color(91, 33, 43);

           if(monRond.y <= 70 && monRond.y >= 50){
         	monRond.color = color(2255, 183, 183);
         }
    });

    monRond.on("pressed", function(event){
    	follow =true
    	
    });
    monRond.on("released", function (event){
    	if(monRond.y <= 70 && monRond.y >= 50){
    		 artifice = true;
   	   		monRond.color = color(222, 0, 0);
   	   		 triggerSuccess();
       	
    	}
    	});

  	
    
    
}



function draw(){
    background(41, 61, 107);
    
    
    noStroke();
     monRond.draw();
     monRond.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    
    if(follow){
         monRond.y = mouseY;
    }

    if(monRond.y<60){
    	follow = false;

    	//monRond = new Circle(128, 210, 0,0);
  
    	//monRond2.draw();
    	//monRond2.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    

    


    }
    if(artifice){
    	strokeWeight(4)
    	stroke(255,216,216);
       	line(93,40,163,80);
       	line(93,80,163,40);

       	strokeWeight(2);
       	stroke(255,176,176);
       	line(128,20,128,100);
       	line(85,60,171,60);
   } 

	if(monRond.y <= 70 && monRond.y >= 50){
		monRond.color = color (255, 183, 183);
    }
}

  function triggerSuccess(){
     top.postMessage('SUCCESS','*');
      console.log("BRAVO");
 } 
