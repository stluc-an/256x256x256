
/*-----------------------------------------*\
    BESOIN : 
    attraper l'événement mouseHover
\*-----------------------------------------*/
var bouton;
var bouton2;

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

function zoomIn(target){
    return new Animator(
        500, 
        function(percent){
            target.h = target.w = this.H * pow(percent, 0.33);
        },
        function(){
            this.H = target.h;
            target.h = target.w = 0
        }, 
        function(){
            target.h = target.w = this.H;
        }, 
        1000
    ).start();
}

function setup(){
    createCanvas(256, 256); 
    rectMode(CENTER);
    ellipseMode(CENTER);
    noStroke();

    bouton = new Square(width/2, height/2, 100, 100);
    bouton2 = new Circle(width/2, height/2, 10);
    bouton2.color = color(63, 178, 63);
    zoomIn(bouton);
    let pressedAnim = pressed(bouton);
    
    bouton.on("pressed", function(event){
        pressedAnim.stop();
        bouton.color = color(255, 255, 255, 128);
        setTimeout(function(){
            bouton.color = color(255, 255, 255);
        }, 50);
        new Animator(
            10000, 
            function(percent){
                bouton.x = this.X + percent * (width + bouton.w);
                bouton2.x = bouton.x = bouton.x  % (width + bouton.w);
            }, function(){
                this.X = bouton.x;
            }, 
            function(){
                bouton2.x = bouton.x = this.X
            }
        ).start();
        bouton.on("moveRight", function(event){
            triggerSuccess();
        })
        
    });
}

function draw(){
    background(63, 178, 63);
    Animator.update();
    bouton.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    bouton2.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    bouton.draw();
    bouton2.draw();
}


function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
}


