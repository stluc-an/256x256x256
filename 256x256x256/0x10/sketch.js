var bouton;
var affichercercle = false;
var bouton2;
var bg;


function zoomIn(target){
    return new Animator(
        500, 
        function(percent){
            target.h = target.w = this.H * pow(percent, 0.33);
        },
        function(){
            this.H = target.h;
            target.h = target.w = 0
        }, 
        function(){
            target.h = target.w = this.H;
        }, 
        1000
    ).start();
}

function setup(){
    bg = loadImage("fond3.jpg");
    createCanvas(256, 256); 
    rectMode(CENTER);
    ellipseMode(CENTER);
    noStroke();


    bouton = new Square (128, 128, 50, 50);
    bouton.color = color(122,15,50);
	   zoomIn(bouton);




    bouton2 = new Circle (47.5,70,20);
    bouton2.color = color (222,12,132);

      
        

   	 bouton.on("pressed", function(event){
        bouton.color = color(256,256,255)
        affichercercle = true;     
       
    	 bouton2.on("click", function(event){
     		bouton2.color = color (122,15,50);
       	triggerSuccess();

       		})
        
    });

}

function draw(){
    background(bg);
    bouton.update(mouseX, mouseY, mouseIsPressed, mouseButton);
   	bouton.draw();
   	Animator.update();

  

    if (affichercercle){
    noFill();  
    stroke(230);
    rect(128,128,70,70)
    ellipse(128,128,100,100);
    ellipse(128,128,200,200);

    bouton2.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    bouton2.draw();}
    }


function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
    console.log("GG");
}

