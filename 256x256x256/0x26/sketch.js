// 0x26 onReleased + onMoveUp

var bouton;
var still;
var follow;
var released;

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
    
    bouton.on("released", function(event){
        blub(event);
        released = true
        bouton.on("moveUp", function(event){
            triggerSuccess();
        });
    });

}

function draw(){
    background(102, 0, 51);
    fill(0);
    rect(width/2,185,5,55);
    bouton.draw();
    bouton.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    Animator.update();
    
    if(released){  
        noStroke();
        circle5 = new Circle(width/2, 50,90);
        circle4 = new Circle(width/2, 80,80);
        circle1 = new Circle(width/2, 100,50);
        circle2 = new Circle(width/2, height/2, 35);
        circle3 = new Circle(width/2, 150, 20);
        circle1.color = color("purple");
        circle2.color = color("red");
        circle1.color = color ("orange")
        circle4.color = color("red")
        circle5.color = color ("orange");
        circle5.draw();
        circle4.draw();
        circle1.draw();
        circle2.draw();
        circle3.draw();
    }

}


function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
    console.log("BRAVO");
}


