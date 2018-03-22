var bouton;
var rondsouris = false;


function colorChange(target){
    return new Animator(
        500, 
        function(percent){
            target.color = lerpColor(this.C, this._C, pow(percent, 5) );
        }, 
        function(){
            this.C = target.color;
            this._C = color(random(255), random(255), random(255));
        }, 
        function(){
            setTimeout(function(){
            }, 300);
            
        }
    ).start();
}


function setup(){
    createCanvas(256, 256); 
    rectMode(CENTER);
    ellipseMode(CENTER);
    noStroke();

    bouton = new Circle(128, 128, 50);
    bouton.color = color(255,255,255);
	   colorChange(bouton);
     
    
   	 bouton.on("rightClick", function(event){
        bouton.color = color(0,0,255);
        rondsouris = true;
        ligne = true;     
       
    	 bouton.on("shake", function(event){
     		bouton.color = color (0,5,100);
         	triggerSuccess(); 

       		}); 
        
    });

}

function draw(){
    background(67,191, 185);
    bouton.update(mouseX, mouseY, mouseIsPressed, mouseButton);
   	bouton.draw();
   	Animator.update();

   	if (rondsouris == true){
   	bouton.y = mouseY;
    bouton.x = mouseX;
    stroke(255);
    line(200,75,200,150);
    fill(255);
    triangle(198, 78, 200, 71, 202, 78);
    triangle(198, 150, 200, 157, 202, 150);
    } 

  }
  

function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
    console.log("GG");
}
