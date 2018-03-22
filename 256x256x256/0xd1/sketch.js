var bouton;
var bouton2;
var bouton2cc = false;



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
    bouton.color = color(37, 168, 162);


    bouton2 = new Circle (width/2, height/2, 20);
    bouton2.color = color(37, 168, 162);
    

    bouton.on("enter", function(event){
        blub(event);

        bouton.on("shake", function(event){
            blub(event);
            bouton.color = color(122, 15, 50);
            bouton2cc = true;

                    bouton2.on("enter", function(event){
                        bouton.color = color(122, 15, 50);
                        bouton2.color = color(256,256,256);

                        bouton2.on("pressed", function(event){
                            triggerSuccess(); 

                          });
                    });        
            });
    });
}

function draw(){
    background(122, 15, 50);
    bouton.draw();
    bouton.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    Animator.update();
    stroke(255);
    line(200,75,200,150);
    fill(255);
    triangle(198, 78, 200, 71, 202, 78);
    triangle(198, 150, 200, 157, 202, 150);

  if (bouton2cc == true){
    bouton2.draw();
    bouton2.update(mouseX, mouseY, mouseIsPressed, mouseButton);
  }

}

function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
    console.log("GG");
}
