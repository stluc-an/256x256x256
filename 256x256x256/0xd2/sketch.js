var bouton;
var bonton2;
var bouton3;

function colorChange(event){
    var target = event.target;
    return new Animator(
        500, 
        function(percent){
            target.color = lerpColor(this.C, this._C, pow(percent, 5) );
        }, 
        function(){
            this.C = target.color;
            this._C = color(random(255), random(255), random(255));
        }, 
    ).start();
}

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
    ellipseMode(CENTER);
    noStroke();

    bouton = new Circle (width/2, height/2, 100);
    bouton2 = new Circle (width/2, height/2, 50);
    bouton3 = new Circleb (width/2, height/2, 10);

    bouton.on("enter", function(event){
        console.log("ENTER");
        blub(event);
        bouton2.on("shake", function(event){
            console.log("SHAKE");
            colorChange(event);
                bouton2.on("released", function(event){
                console.log("RELEASED");
                blub(event);
                triggerSuccess();
            });
        });
    });
}

function draw(){
    background(37, 168, 162);
    bouton.draw();
    bouton.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    bouton2.draw();
    bouton2.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    bouton3.draw();
    bouton3.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    Animator.update();
}


function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
    console.log("SUCCES");
}