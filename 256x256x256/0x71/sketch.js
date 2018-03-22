var bouton;
var bouton2;

function Rotation(event){
    var target = event.target;
    return new Animator(
        200, 
        function(percent){
            translate(target.x, target.y);
            rotate(-PI * pow(percent, 2));
            scale(abs(percent * 2 - 1));
            translate(-target.x, -target.y);
            if(!this.flag && percent > 0.5){
                bouton = new Square(width/5, height/5, 100, 100);
                bouton.on("pressed", Rotation);
                blubSq(bouton);
                
                flag = false;
                bouton.on("pressed", Rotation);
                blubSq(bouton);
                
                
            }
        }, function(){
            this.flag = false;
        }, function(){
            //triggerSuccess();
        }
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


function setup(){
    createCanvas(256, 256); 
    rectMode(CENTER);
    ellipseMode(CENTER);
    noStroke();
    
    bouton = new Square(width/2, height/2, 100, 100);
    
  
   
    bouton.on("moveDown", function(event){
        console.log("youdown");
        bouton.color = color (100, 240, 90);
        
        blubSq(event);
        bouton.on("pressed", function(event){
            console.log("youpressed");
        bouton.color = color (200, 140, 102);

            Rotation(event);
            
             triggerSuccess();   
        console.log("youwin");
        });
    });
}

 
function draw(){
    background(100, 153, 100);
    Animator.update();
    bouton.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    bouton.draw();
    
}

function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
}