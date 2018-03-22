

var bouton;
var bouton2;



function zoomIn(target){
    return new Animator(
    100,
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
        100
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
    bouton2 = new Circle(width/2, height/2,50, 150);
    
    bouton.on("drop", function(event){
         zoomIn(bouton);
        console.log("itsdrop");
       
            
        bouton2.on("hover", function(event){
            console.log("itshover");
             zoomIn(bouton2);
             /*Rotation(bouton);*/
              triggerSuccess();   
           
           
        });
    });
}

 
function draw(){
    background(105, 253, 100);
    Animator.update();
    bouton.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    bouton.draw();
     bouton2.update(mouseY, mouseX, mouseButton, mouseIsPressed);
    bouton2.draw();
    
}

function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
    console.log("winner");
}


