// 0xf8 onStill + onMoveLeft

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

    bouton = new Circle(192, height/2,50);
    bouton.color = color("red");
    
    bouton.on("enter", function(event){
        blub(event);
        bouton.on("still", function(event){
            bouton.color = color(51, 204, 255);
            still = true
            bouton.on("moveLeft", function(event){
            still = true
            triggerSuccess();
            });
        });
    });

}

function draw(){
    background(96, 32, 64);
    bouton.draw();
    bouton.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    Animator.update();

    if(still){  
        noStroke();
        redcircle = new Circle(width/2, height/2, 50);
        redcircle2 = new Circle(64, height/2,50);
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


