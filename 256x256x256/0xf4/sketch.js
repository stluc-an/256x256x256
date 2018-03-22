// 0xf4 onStill + onDrag

var bouton;
var bluecircle;
var redcircle;
var greencircle;
var still;
var follow;
var dragged;

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

    bouton = new Circle(width/2, 192,50);
    bouton.color = color(204, 102, 153);
    
    bouton.on("enter", function(event){
        blub(event);
        bouton.on("still", function(event){
            bouton.color = color(51, 204, 255);
            still = true
            bouton.on("drag", function(event){
            follow = true
            dragged = true
            triggerSuccess();
            });
        });
    });

}

function draw(){
    background(102, 0, 51);
    bouton.draw();
    bouton.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    Animator.update();

    if(still){  
        noStroke();
        orangecircle = new Circle(width/2, height/2, 50);
        redcircle = new Circle(width/2, 64,50);
        orangecircle.color = color(255, 153, 51);
        redcircle.color = color("red");
        orangecircle.draw();
        redcircle.draw(); 
    }

    if(dragged){
        greencircle = new Circle(width/2, 192, 50);
        greencircle.color = color(51, 204, 51);
        greencircle.draw();
    }

    if(follow){
        bouton.x = mouseX;
        bouton.y = mouseY;
    }
}


function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
    console.log("BRAVO");
}


