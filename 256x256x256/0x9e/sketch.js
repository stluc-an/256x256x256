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

function setup(){
    createCanvas(256, 256); 
    rectMode(CENTER);
    noStroke();

    bouton = new Square (width/2, height/2, 100, 100);
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
                bouton.x = this.x + percent * (width + bouton.w);
            }, function(){
                this.x = bouton.x;
            }, 
        ).start();
        bouton.on("moveRight", function(event){
        console.log("MOVE");
        })

        bouton.on("metaKey", function(event){
        console.log("META");
        triggerSuccess();
        })
        
    });
}

function draw(){
    background(76, 74, 91);

    fill(0);
    noStroke();
    textSize(20);
    text('ALT',230/2 ,256/2);

    Animator.update();
    bouton.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    bouton.draw();
}


function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
    console.log("SUCCES");
}


