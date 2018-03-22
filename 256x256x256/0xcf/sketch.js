// 0xcf onLeave + onStill

var bouton;
var bluecircle;
var redcircle;
var still;

function blub(event){
    var target = event.target;
    return new Animator(
        2000, 
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

    bouton = new Circle(64, 30,100);
    bouton.color = color(256);
    planet = new Circle(256,256,450);
    planet.color = color("blue");
    
    planet.on("leave", function(event){
        bouton.on("still", function(event){
            blub(event);
            bouton.color = color("yellow");
            triggerSuccess();
        });
    });

}

function draw(){
    background(0);
    fill(256);
    ellipse(140,50,3);
    ellipse(120,45,3);
    ellipse(140,50,3);
    ellipse(85,80,3);
    ellipse(95,90,3);
    ellipse(50,85,3);
    ellipse(50,105,3);
    ellipse(140,50,3);
    bouton.draw();
    bouton.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    planet.draw();
    planet.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    Animator.update();

    if(still){  
        noStroke();
        redcircle = new Circle(width/2, height/2, 50);
       // redcircle2 = new 
        redcircle.color = color("red");
        redcircle2.color = color("red");

        redcircle.draw();
        redcircle2.draw();
        
    }
}


function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
    console.log("BRAVO");
}


