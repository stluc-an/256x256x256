var bouton;
var souris = false;

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

    bouton = new Circle (200, 200, 100);
    
    bouton.on("drag", function(event){
        console.log("DRAG");
        blub(event);
        souris = true;
     
    bouton.on("shake", function(event){
        console.log("SHAKE");
        colorChange(event);
        blub(event);
            bouton.on("drop", function(event){
                console.log("DROP");
                triggerSuccess();
            });
        });  
    });
}

function draw(){
    background(118, 30, 51);

    fill(0);
    noStroke();
    textSize(10);
    text('Bouge ma Boule',150,200);

    fill(0);
    noStroke();
    textSize(50);
    text('X',30,69);

    bouton.draw();
    bouton.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    Animator.update();

    if (souris == true){
    bouton.y = mouseY;
    bouton.x = mouseX;
    }
}


function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
    console.log("SUCCES");
}