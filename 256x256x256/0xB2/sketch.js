
/*-----------------------------------------*\
    BESOIN : 
    attraper l'événement mouseHover
\*-----------------------------------------*/
var bouton;

function Rotation(event){
    var target = event.target;
        return new Animator(
            500, 
            function(percent){
                translate(target.x, target.y);
                rotate(PI * pow(percent, 2));
                scale(abs(percent * 2 - 1));
                translate(-target.x, -target.y);
                if(!this.flag && percent > 0.5){
                    bouton = new Circle(width/2, height/2, 100);
                    flag = true;   
                }
            }, function(){
                this.flag = false;
            }, function (){
                bouton.on("leave", Rotation2);
            }
        ).start();
}

function Rotation2(event){
    var target = event.target;
    return new Animator(
        500, 
        function(percent){
            translate(target.x, target.y);
            rotate(-PI * pow(percent, 2));
            scale(abs(percent * 2 - 1));
            translate(-target.x, -target.y);
            if(!this.flag && percent > 0.5){
                bouton = new Square(width/2, height/2, 100, 100);
                bouton.on("enter", Rotation); 
                flag = true;   
            }
        }, function(){
            this.flag = false;
        }, function(){
            triggerSuccess();
        }
    ).start();
}

function setup(){
    createCanvas(256, 256); 
    rectMode(CENTER);
    ellipseMode(CENTER);
    noStroke();

    bouton = new Square(width/2, height/2, 100, 100);

    bouton.on("enter", Rotation);
}

function draw(){
    background(178, 63, 63);
    Animator.update();
    bouton.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    bouton.draw();
}

function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
}


