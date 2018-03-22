var bouton;
var affichercercle = false;
var bouton2;

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
    createCanvas(256, 256); 
    rectMode(CENTER);
    ellipseMode(CENTER);
    noStroke();


    bouton = new Circle(128, 128, 14);
    bouton.color = color(255,255,255);
	  blub(bouton);


    bouton2 = new Circle (198,198,20);
    bouton2.color = color (255,255,255);

         

   	 bouton.on("rightClick", function(event){
        bouton.color = color(0,0,255)
        affichercercle = true;     
       
    	 bouton2.on("enter", function(event){
     		bouton2.color = color (0,0,255);
         	triggerSuccess();

       		})
        
    });

}

function draw(){
    background(52, 69, 39);
    bouton.update(mouseX, mouseY, mouseIsPressed, mouseButton);
   	bouton.draw();
   	Animator.update();


   	if (affichercercle){
   	noFill(); 
	  stroke(80);
	  ellipse(128,128,20,20);
	  ellipse(128,128,50,50);
	  ellipse(128,128,200,200);

	  bouton2.update(mouseX, mouseY, mouseIsPressed, mouseButton);
   	bouton2.draw();}
   	}


function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
    console.log("GG");
}

