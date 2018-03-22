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

    bouton = new Circle (width/2, height/2, 100);
    
    bouton.on("enter", function(event){
        console.log("ENTER");
        blub(event);
      });  
    bouton.on("shake", function(event){
        console.log("SHAKE");
        blub(event);
        bouton.on("rightClick", function(event){
            console.log("RCLICK");
            colorChange(event);
            triggerSuccess();
        });
    });
}

function draw(){
    background(37, 168, 162);
    bouton.draw();
    bouton.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    Animator.update();
}


function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
    console.log("SUCCES");
}