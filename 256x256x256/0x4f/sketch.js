var bouton;
var bouton2;

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
                    blub(bouton);
                    flag = true;   
                }
            }, function(){
                this.flag = false;
            }, function (){
                bouton.on("drag", Rotation2);
                
               
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
                bouton = new square2(width/5, height/2, 100, 100);
                bouton.on("still", Rotation3);
                blubSq(bouton);
                flag = true;   
                }
        }, function(){
            this.flag = false;
        }, function(){
            //triggerSuccess();
        }
    ).start();
}

function Rotation3(event){
    var target = event.target;
    return new Animator(
        500, 
        function(percent){
            translate(target.x, target.y);
            rotate(-PI * pow(percent, 2));
            scale(abs(percent * 2 - 1));
            translate(-target.x, -target.y);
            if(!this.flag && percent > 0.5){
                
                triggerSuccess();
                flag = true;   
                }
        }, function(){
            this.flag = false;
        }, 
    ).start();
}

function blubSq(target){
    return new Animator(
        7000, 
        function(percent){
            target.w = target.h = this.D  + 10 * cos(pow(percent, 0.256) * 5 * PI);
            target.half_w = target.half_h = target.w/2;
        }, 
        function(){
            this.D = target.w;
        },
        function(){
            target.w = target.h = this.D;
            target.half_w = target.half_h = target.w/2;
        }
    ).start();
}

function blub(target){
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
    bouton = new Square(width/5, height/2, 100, 100);
    bouton2 = new square2(width/10, height/5, 150, 50);
    bouton.on("drag", Rotation);
}

function draw(){
    background(225, 203, 100);
    Animator.update();
    bouton.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    bouton.draw();
}

function triggerSuccess(){
    console.log("YOUWIIN!");
    top.postMessage('SUCCESS', '*');
}


