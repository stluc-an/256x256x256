var bouton;
var bouton2;
var bg;
var souris = false;

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
    bg = loadImage("fond.jpg");
    createCanvas(256, 256); 
    rectMode(CENTER);
    ellipseMode(CENTER);

    bouton = new Circle(50, 210, 30);
    bouton.color = color(158,31,99);
	  blub(bouton);
    
    bouton2 = new Circle2(206, 210, 30);

      
     bouton.on("hover", function(event){
          souris = true;

   	   bouton.on("moveUp", function(event){
          bouton.color = color(158,31,99);
       
    	   bouton.on("moveDown", function(event){
     		   bouton.color = color (102,45,145);
         	    

              bouton2.on("hover", function(event){
                bouton.color = color (255,255,255);
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

    fill(255,255,255);
    rect(256/2,240,200,20)
    rect(256/2,216,110,20)
    rect(256/2,192,60,20)
    rect(256/2,168,30,20)
    rect(256/2,144,15,20)
    rect(256/2,120,3,20)

    if (souris == true){
        bouton.y = mouseY;
        bouton.x = mouseX;
    }
}


function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
    console.log("GG");
}

