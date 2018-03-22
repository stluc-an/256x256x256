var bouton;
var bouton2;
var bg;
var souris = false;
var cerclecc = false;

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
    bg = loadImage("fond2.jpg");
    createCanvas(256, 256); 
    rectMode(CENTER);
    ellipseMode(CENTER);


    bouton = new Circle(256/2, 230, 30);
    bouton.color = color(158,31,99);
	  blub(bouton);
    
    bouton2 = new Circle2(256/2, 30, 30);
    cercle = new Circle2(256/2, 30, 45);

      
     bouton.on("hover", function(event){
          souris = true;

   	   bouton.on("moveUp", function(event){
          bouton.color = color(158,31,99);


              bouton2.on("hover", function(event){
                bouton.color = color (34,9,128);
                cerclecc = true;

                  cercle.on("enter", function(event){
                  blub(cercle);
                

                    bouton2.on("rightClick", function(event){
                      bouton.color = color (0,0,0);
                      triggerSuccess();
                  });  
             
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

    fill(0,0,0);
    noStroke();
    rect(51.5,256/2,103,256);
    rect(204.5,256/2,103,256);
    

    if (souris == true){
        bouton.y = mouseY;
        bouton.x = mouseX;
    }

    if (cerclecc == true){
    cercle.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    cercle.draw();

    }
}


function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
    console.log("GG");
}

