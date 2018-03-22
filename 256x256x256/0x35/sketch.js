var bouton;
var bouton2;
var poubelle;
var souris = false;
var afficherpoubelle = false;
var ciaobouton = true;


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

    bouton = new Circle(50, 60, 50);
    bouton.color = color(256,256,256);
    blub(bouton);
    
    bouton2 = new Circle(50, 60, 25 );
    bouton2.color = color(34,9,128);
    blub(bouton2);

    poubelle = new Square(200,190,80,100);
    poubelle.color = color(118,30,51);


      
     bouton2.on("rightClick", function(event){
          bouton2.color = color(158,31,99);
          afficherpoubelle = true;
          ciaobouton = false;
          blub(bouton);

   	     bouton.on("drag", function(event){
             bouton.color = color(118,30,51);
             souris = true;

                poubelle.on("enter", function(event){
                poubelle.color = color(256,256,256);

                    bouton.on("drop", function(event){
                       triggerSuccess("BRAVO");
                     });
       
                 });
         
          });

    });

}

function draw(){
    background(34,9,128);
    bouton.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    bouton.draw();
   	Animator.update();

    if (souris == true){
        bouton.y = mouseY;
        bouton.x = mouseX;
    }

    if (ciaobouton == true){
    bouton2.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    bouton2.draw();} 
    

   if (afficherpoubelle == true){
   	poubelle.update(mouseX, mouseY, mouseIsPressed, mouseButton);
   	poubelle.draw();

   } 
}


function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
    console.log("GG");
}

