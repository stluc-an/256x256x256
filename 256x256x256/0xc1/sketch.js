// var bouton;
var bouton2;

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

    bouton = new Circle (width/2, height/2, 200);
    bouton2 = new Circle(width/2, height/2, 50);
    bouton2.color = color(230, 0, 20);
    
    bouton2.on("leave", function(event){
        console.log("LEAVE");
        blub(event);
        bouton.on("pressed", function(event){
            console.log("PRESSED");
            colorChange(event);
            triggerSuccess();
        });
    });
}

function draw(){
    background(146, 99, 23);
    bouton.draw();
    bouton.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    bouton2.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    bouton2.draw();
    Animator.update();
}


function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
    console.log("SUCCES");
}