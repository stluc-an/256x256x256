var bouton;
var boutonB;

function pressed(target){
    return new Animator(
        100, 
        function(percent){
            translate(target.x, target.y);
            scale(lerp(1, 0.08, lerp(1, 0.05, abs(sin(percent*TWO_PI)))));
            translate(-target.x, -target.y);
        }, function(){
        }, 
        function(){
            this.start()
        }, 
        1000
    ).start();
}

function zoomIn(target){
    return new Animator(
        10, 
        function(percent){
            target.h = target.w = this.H * pow(percent, 0.33);
        },
        function(){
            this.H = target.h;
            target.h = target.w = 12
        }, 
        function(){
            target.h = target.w = this.H;
        }, 
        10
    ).start();
}

function blub(event){
    var target = event.target;
    return new Animator(
        100000, 
        function(percent){
            target.d = this.D  + 20 * cos(pow(percent, 0.256) * 5 * PI);
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
    stroke(150,150,100);
    bouton = new Circle(width/2, height/2, 160);
    boutonC = new Circle(width/2, height/2, 80);
   

    boutonC.color = color(0,51,0);
    
    bouton.color = color(255,102,102);
    zoomIn(bouton);
 

    let pressedAnim = pressed(bouton);
    
   
    bouton.on("enter", function(event){
        bouton.color = color(0,51,0);
        blub(event);
        console.log("youenter")
    boutonC.on("drag", function(event){
        boutonC.color = color (255, 102, 102);
        console.log("youdrag");
        triggerSuccess();   
        console.log("youwin");
        });
    });

    

       
}

function draw(){
    //background(220,250, 200, 100);
    Animator.update();
    bouton.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    boutonC.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    bouton.draw();
    boutonC.draw();
}


function triggerSuccess(){
    console.log("youwin");
    top.postMessage('SUCCESS', '*');

}
