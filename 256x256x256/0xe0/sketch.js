var bouton;

function colorChange(event){
    var target = event.target;
    return new Animator(
        500, 
        function(percent){
            target.color = lerpColor(this.C, this._C, pow(percent, 5 ) );
        }, 
        function(){
            this.C = target.color;
            this._C = color(0);
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
    rectMode(CENTER);
    ellipseMode(CENTER);
    noStroke();

    bouton = new Square(width/2, height/2, 150, 150);
    
    bouton.on("metaKey", function(event){
        console.log("META");
        colorChange(event);
        bouton.on("click", function(event){
            console.log("CLICK");
            blub(event);
            triggerSuccess();
        });
    });
}

function draw(){
    background(49, 156, 44);
    bouton.draw();
    bouton.update(mouseX, mouseY, mouseIsPressed, mouseButton);

    fill(0);
    noStroke();
    textSize(50);
    text('ALT',80,140);

    Animator.update();
}


function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
    console.log("SUCCES");
}

