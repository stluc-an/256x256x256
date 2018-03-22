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
    noStroke();
 
    bouton2 = new Circle (width/2, height/2, 100,);

    bouton = new Square (width/2, height/2, 200, 200);
    let pressedAnim = pressed(bouton);
    
    bouton.on("enter", function(event){
        console.log("ENTER RECT");
        pressedAnim.stop();
        bouton.color = color(201, 19, 134, 128);
        setTimeout(function(){
            bouton.color = color(201, 19, 134);
        }, 50);
        new Animator(
            10000, 
            function(percent){
                bouton.y = this.y - percent * (width + bouton.w);
            }, function(){
                this.y = bouton.y;
            }, 
        ).start();
        bouton.on("moveUp", function(event){
        console.log("MOVE");
                bouton2.on("enter", function(event){
                console.log("ENTER CIRCLE");
                blub(event);
                    bouton2.on("shake", function(event){
                        console.log("SHAKE");
                    triggerSuccess();
                });
            });
        });
    });
}

function draw(){
    background(37, 168, 162);

    bouton2.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    bouton2.draw();

    fill(0);
    noStroke();
    textSize(10);
    text('Make Me Shake ;)',90,256/2);

    Animator.update();
    bouton.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    bouton.draw();
}


function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
    console.log("SUCCES");
}


