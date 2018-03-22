var bouton;
var bouton1;
var bouton2;
var bouton3;
var bouton4;
var souris = false;

let stopCallToPress = false;

function pressed(target){
    return new Animator(
        125, 
        function(percent){
            translate(target.x, target.y);
            scale(lerp(1, 0.95, lerp(1, 0.2, abs(sin(percent*TWO_PI)))));
            translate(-target.x, -target.y);
        }, function(){
        }, 
        function(){
            this.start()
        }, 
        3000
    ).start();
}

function setup(){
    createCanvas(256, 256); 
    rectMode(CENTER);
    noStroke();

    bouton1 = new Circleb(width/2, height/2, 100);
    bouton2 = new Circle(width/2, height/2, 75);
    bouton3 = new Circleb(width/2, height/2, 50);
    bouton4 = new Circle(width/2, height/2, 25);

    bouton = new Square(width/2, height/2, 100, 100);
    let pressedAnim = pressed(bouton);
    
    bouton.on("drag", function(event){
        souris = true;
    })

    bouton.on("drop", function(event){
        console.log("DROP");
        pressedAnim.stop();
        bouton.color = color(255, 255, 255, 128);
        setTimeout(function(){
            bouton.color = color(255, 255, 255);
        }, 50);
        bouton.on("click", function(event){
            console.log("CLICK");
            triggerSuccess();
        })
        
    });
}

function draw(){
    background(118, 30, 51);
    Animator.update();

    bouton1.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    bouton1.draw();
    bouton2.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    bouton2.draw();
    bouton3.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    bouton3.draw();
    bouton4.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    bouton4.draw();

    bouton.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    bouton.draw();

    if (souris == true){
    bouton.y = mouseY;
    bouton.x = mouseX;
    }
}


function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
    console.log("SUCCES");
}