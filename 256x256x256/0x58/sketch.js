var bouton;
var bouton2;
var bouton3;
var bouton4;
var bouton5;
var bouton6;
var souris = false;

let stopCallToPress = false;

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

    bouton = new Circle (236, 256/2, 200);
    bouton2 = new Circle (85, 256/2, 260);
    bouton3 = new CircleP (85, 256/2, 20);
    bouton6 = new CircleV (85, 256/2, 70);
    bouton4 = new CircleP (180, 256/2, 20);
    bouton5 = new CircleV (180, 256/2, 70);


    zoomIn(bouton);
    let pressedAnim = pressed(bouton);
    bouton3.on("drag",function(event){
    souris = true;
    })
    bouton2.on("enter", function(event){
    console.log("ENTER");
    blub(event);

    bouton2.on("drop", function(event){
        console.log("DROP Circle");
        bouton2.color = color(150, 30, 51);

        bouton.on("moveLeft", function(event){
                console.log("MOVE");
                pressedAnim.stop();
                bouton.color = color(150, 30, 51);
            triggerSuccess();
            });
        });
    });     
}

function draw(){
    background(245, 85, 101);
    Animator.update();

    bouton2.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    bouton2.draw();
    bouton.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    bouton.draw();
    bouton5.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    bouton5.draw();
    bouton4.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    bouton4.draw();
    bouton6.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    bouton6.draw();
    bouton3.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    bouton3.draw();

    fill(0);
    noStroke();
    textSize(15);
    text('<=====>',100,133);

    if (souris == true){
    bouton3.y = mouseY;
    bouton3.x = mouseX;
    }
}


function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
    console.log("SUCCES");
}