var maGraine;
var monBulbe ; 
var follow = false;
var droper = false ;
var pousse = false ;
var l = 0;
var h = 0;
function setup(){
    createCanvas(256, 256);
    noStroke();
    ellipseMode(CENTER);
  
    maGraine = new Circle(50, 60,  15, 15);
    maGraine.color = color(171, 171, 125);

    monBulbe = new Circle(128, 200, 30, 30);
    monBulbe.color = color(87, 74, 46);
    
   
    maGraine.on("enter", function (event){
         maGraine.color = color(232, 232, 125);
    });
    maGraine.on("leave", function (event){
          maGraine.color = color(171, 171, 125);
    });

    maGraine.on("drag", function (event){
        follow = true ; 
    });

     maGraine.on("drop", function(event){
    	follow = false;
    	droper = true ; 

    });

    monBulbe.on("enter", function (event){
         monBulbe.color = color(179, 141, 52);

          
             
         });
    monBulbe.on("leave", function (event){
         monBulbe.color = color(87, 74, 46);

          
             
         });
    monBulbe.on("pressed", function(event){
        pousse = true ;
    })
  	
    monBulbe.on("released", function(event){
        pousse = false ;
         triggerSuccess();
    })
    
    
}



function draw(){
    

    background(170, 245, 237);
    strokeWeight(5);
    stroke(169, 79, 10);
    
    line(60, 160, 90, 240)
    line(90, 240, 166, 240);
    line(166,240,196 ,160)

    noStroke();
     maGraine.draw();
     maGraine.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    
    if(follow){
        maGraine.x = mouseX ; 
        maGraine.y = mouseY ; 
    }


    if(droper){

        maGraine = new Circle(50, 60,  0, 0);

        noStroke();
         monBulbe.draw();
         monBulbe.update(mouseX, mouseY, mouseIsPressed, mouseButton);


        
    }

    if(pousse){
        
            noStroke();
            fill(49, 201, 53);
            rectMode(CENTER);
            rect(128, 190, 10, h, 20)
            h = h+1;
        
        
    }
}

  
  function triggerSuccess(){
     top.postMessage('SUCCESS','*');
      console.log("BRAVO");
 } 
