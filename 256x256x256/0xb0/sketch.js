// 0xb0 onEnter + onClick

var bouton;
var bouton1;
var bouton2;
var bouton3;
var bouton4;
var bouton5;
var bouton6;
var bouton7;
var bouton8;
var bouton9;
var bouton10;
var bouton11;
var bouton12;
var bouton13;
var bouton14;
var bouton15;
var bouton16;
var bouton17;
var bouton18;
var bouton19;

function blub(event){
    var target = event.target;
    return new Animator(
        2000, 
        function(percent){
            target.d = this.D  + 5 * cos(pow(percent, 0.256) * 5 * PI);
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

    bouton = new Circle(30, 30, 30);
    bouton1 = new Circle(80, 30, 30);
    bouton2 = new Circle(130, 30, 30);
    bouton3 = new Circle(180, 30, 30);
    bouton4 = new Circle(230, 30, 30);
    bouton5 = new Circle(30, 80, 30);
    bouton6 = new Circle(80, 80, 30);
    bouton7 = new Circle(130, 80, 30);
    bouton8 = new Circle(180, 80, 30);
    bouton9 = new Circle(230, 80, 30);
    bouton10 = new Circle(30, 130, 30);
    bouton11 = new Circle(80, 130, 30);
    bouton12 = new Circle(130, 130, 30);
    bouton13 = new Circle(180, 130, 30);
    bouton14 = new Circle(230, 130, 30);
    bouton15 = new Circle(30, 180, 30);
    bouton16 = new Circle(80, 180, 30);
    bouton17 = new Circle(130, 180, 30);
    bouton18 = new Circle(180, 180, 30);
    bouton19 = new Circle(230, 180, 30);
    bouton20 = new Circle(30, 230, 30);
    bouton21 = new Circle(80, 230, 30);
    bouton22 = new Circle(130, 230, 30);
    bouton23 = new Circle(180, 230, 30);
    bouton24 = new Circle(230, 230, 30);
    
    bouton.on("enter", function(event){
        blub(event);
    });
    bouton1.on("enter", function(event){
        blub(event);
    });
    bouton2.on("enter", function(event){
        blub(event);
    });
    bouton3.on("enter", function(event){
        blub(event);
    });
    bouton4.on("enter", function(event){
        blub(event);
    });
    bouton5.on("enter", function(event){
        blub(event);
    });
    bouton7.on("enter", function(event){
        blub(event);
    });
    bouton8.on("enter", function(event){
        blub(event);
    });
    bouton9.on("enter", function(event){
        blub(event);
    });
    bouton12.on("enter", function(event){
        blub(event);
    });
  
     bouton5.on("enter", function (event){
        bouton5.on("click", function (event){
        triggerSuccess();
        });
    });

}

function draw(){
    background(16, 52, 166);
    fill(bouton.isHover(mouseX, mouseY) ? "red" : 255);
    bouton.draw();
    bouton.update(mouseX, mouseY, mouseIsPressed, mouseButton);
     fill(bouton1.isHover(mouseX, mouseY) ? "red" : 255);
    bouton1.draw();
    bouton1.update(mouseX, mouseY, mouseIsPressed, mouseButton);
     fill(bouton2.isHover(mouseX, mouseY) ? "red" : 255);
    bouton2.draw();
    bouton2.update(mouseX, mouseY, mouseIsPressed, mouseButton);
     fill(bouton3.isHover(mouseX, mouseY) ? "red" : 255);
    bouton3.draw();
    bouton3.update(mouseX, mouseY, mouseIsPressed, mouseButton);
     fill(bouton4.isHover(mouseX, mouseY) ? "red" : 255);
    bouton4.draw();
    bouton4.update(mouseX, mouseY, mouseIsPressed, mouseButton);
     fill(bouton5.isHover(mouseX, mouseY) ? "red" : 255);
    bouton5.draw();
    bouton5.update(mouseX, mouseY, mouseIsPressed, mouseButton);
     fill(255, 204, 0);
    bouton6.draw();
    bouton6.update(mouseX, mouseY, mouseIsPressed, mouseButton);
     fill(bouton7.isHover(mouseX, mouseY) ? "red" : 255);
    bouton7.draw();
    bouton7.update(mouseX, mouseY, mouseIsPressed, mouseButton);
     fill(bouton8.isHover(mouseX, mouseY) ? "red" : 255);
    bouton8.draw();
    bouton8.update(mouseX, mouseY, mouseIsPressed, mouseButton);
     fill(bouton9.isHover(mouseX, mouseY) ? "red" : 255);
    bouton9.draw();
    bouton9.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    fill(255, 204, 0);
    bouton10.draw();
    bouton10.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    fill("red");
    bouton11.draw();
    bouton11.update(mouseX, mouseY, mouseIsPressed, mouseButton);
     fill(bouton12.isHover(mouseX, mouseY) ? "red" : 255);
    bouton12.draw();
    bouton12.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    fill("red");
    bouton13.draw();
    bouton13.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    fill(255, 204, 0);
    bouton14.draw();
    bouton14.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    fill(255, 204, 0);
    bouton15.draw();
    bouton15.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    fill("red");
    bouton16.draw();
    bouton16.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    fill("red");
    bouton17.draw();
    bouton17.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    fill(255, 204, 0);
    bouton18.draw();
    bouton18.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    fill("red");
    bouton19.draw();
    bouton19.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    fill("red");
    bouton20.draw();
    bouton20.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    fill(255, 204, 0);
    bouton21.draw();
    bouton21.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    fill(255, 204, 0);
    bouton22.draw();
    bouton22.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    fill("red");
    bouton23.draw();
    bouton23.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    fill(255, 204, 0);
    bouton24.draw();
    bouton24.update(mouseX, mouseY, mouseIsPressed, mouseButton);

    Animator.update();
}


function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
    console.log("BRAVO");
}
