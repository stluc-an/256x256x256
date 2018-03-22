var bouton;
var bouton2;
var bg;
var souris = false;
var souris2 = false;
var souris3 = false;
var souris4 = false;


function blub(target){
    return new Animator(
        1000, 
        function(percent){
            target.d = this.D  + 10 * cos(pow(percent, 0.256) * 5 * PI);
        }, 
        function(){
            this.D = target.d;
        },
        function(){
            target.d = this.D;
        }
    ).start();
}


function setup(){
    bg = loadImage("fond4.jpg");
    createCanvas(256, 256); 
    rectMode(CENTER);
    ellipseMode(CENTER);


    bouton = new Circle(40, 70, 70);
    bouton.color = color(186,15,12);
	  blub(bouton);
    
    bouton2 = new Circle2(210,210,40);
    bouton2.color = color(217,66,94);
 
      
     bouton.on("drag", function(event){
          souris = true;

   	   bouton.on("released", function(event){
          bouton.color = color(256,256,256);
          souris2 = true;
          blub(bouton2);
       
    	 
              bouton2.on("drag", function(event){
                bouton2.color = color (256,256,256);
                souris3 = true;

                bouton2.on("drop", function(event){
                  bouton.color = color (256,256,256);
                  souris4 = true;
                  triggerSuccess();
                   
              });

       		});
        
       });

    });

}

function draw(){
    background(bg);
    bouton.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    bouton2.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    bouton.draw();
    bouton2.draw();
   	Animator.update();

    fill(256,256,256);
    noStroke();
    ellipse(10,230,110,250);
    

    if (souris == true){
        bouton.y = mouseY;
        bouton.x = mouseX;
    }

    if (souris2 == true){
        bouton.y = 240;
        bouton.x = 256/2;
    } 

    if (souris3 == true){
        bouton2.y = mouseY;
        bouton2.x = mouseX;
    }

    if (souris4 == true){
        bouton2.y = 190;
        bouton2.x = 127;
    } 
  
}


function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
        console.log("GG");
}

