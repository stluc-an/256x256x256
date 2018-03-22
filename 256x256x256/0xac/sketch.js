// 0xac onHover + onLeave

var bouton;

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

    //chique
    bouton = new Circle(200, 205,50);
    bouton.color = color(204, 102, 153);
    
    bouton.on("hover", function(event){
        blub(event);
        bouton.on("leave", function(event){
            triggerSuccess();
        });
    });

}

function draw(){
    background(102, 0, 51);
    fill(0);
    rect(width/2,185,5,55);
 

    fill(0);
    ellipse(width/2, 50,50);
    ellipse(130, 90,10);
    fill(256);
    ellipse(134, 35,10);

    fill(0);
    ellipse(65, 100,50);
    fill(256);
    ellipse(71, 85,10);
    fill(0);
    ellipse(250, 200,300);
    fill("red")
    ellipse(205,200,150);

       bouton.draw();
    bouton.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    Animator.update();
}


function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
    console.log("BRAVO");
}


