var bouton;

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
        function(){
            setTimeout(function(){
                triggerSuccess();
            }, 300);
            
        }
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
    ellipseMode(CENTER);
    noStroke();

    bouton = new Square(width/2, height/2,100, 100);
    
    bouton.on("moveRight", function(event){
        blub(event);
        bouton.on("moveRight", function(event){
            colorChange(event);
             triggerSuccess();   
        console.log("youwin");
        });
    });
}

 
function draw(){
    background(200, 103, 50);
    Animator.update();
    bouton.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    bouton.draw();
    
}

function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
    console.log("winner");
}


