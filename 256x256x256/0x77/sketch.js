var bouton;

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
    noStroke();

    bouton = new Square(width/2, height/2, 100, 100);
    zoomIn(bouton);
    let pressedAnim = pressed(bouton);
    
    bouton.on("enter", function(event){
        console.log("ENTER");
        pressedAnim.stop();
        bouton.color = color(255, 255, 255, 128);
        setTimeout(function(){
            bouton.color = color(255, 255, 255);
        }, 50);
        new Animator(
            10000, 
            function(percent){
                bouton.y = this.y + percent * (width + bouton.w);
            }, function(){
                this.y = bouton.y;
            }, 
        ).start();
        bouton.on("moveDown", function(event){
            triggerSuccess();
            console.log("DOWN");
        })
        
    });
}

function draw(){
    background(139, 27, 137);
    Animator.update();
    bouton.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    bouton.draw();
}


function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
    console.log("SUCCES");
}


