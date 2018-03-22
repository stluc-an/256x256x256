var train;
var bouton;

let stopCallToPress = false;


function pressed(target){
    return new Animator(
        125, 
        function(percent){
            translate(target.x, target.y);
            translate(-target.x, -target.y);
        }, function(){
        }, 
        function(){
            this.start()
        }, 
        125
    ).start();
}

function setup(){
    createCanvas(256, 256); 
    rectMode(CENTER);
    ellipseMode(CENTER);

    bouton = new Circle(220, 50, 30,30);
    bouton.color = color(256,256,256);
    
    train = new Square(256/2, 70, 60,120);
    train.color = color(145,126,136);

    let pressedAnim = pressed(train);
  

    bouton.on("hover", function(event){
        bouton.color = color(145,126,136);
        pressedAnim.stop();
        train.color = color(255, 255, 255);
        setTimeout(function(){
            train.color = color(145,126,136);
        }, 50);
        new Animator(
            5000, 
            function(percent){
                train.y = this.y + percent * (width + train.w);
            }, function(){
                this.y = train.y;
            }, 
        ).start();

          train.on("hover", function(event){
             train.color = color(255, 255, 255);
         

             train.on("moveDown", function(event){
                train.color = color(139, 27, 137);
                triggerSuccess();
                    
            })

        }); 

    });

}

function draw(){
    background(139, 27, 137);
    train.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    bouton.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    train.draw();
    bouton.draw();
   	Animator.update();

    noFill();
    stroke(256,256,256);
    rect(256/2,256/2,40,260);
    
   	}


function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
    console.log("GG");
}

