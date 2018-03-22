class First {
    constructor() {
        this.setup = false;
        this.toCenter = false;
        this.angle = 0;
        this.count = 0;
        this.clickedRight = false;
        this.holds = false;
        this.buttons=[];
        this.success=false;
    }

    reset() {
        this.setup = false;
        this.toCenter = false;
        this.angle = 0;
        this.count = 0;
        this.clickedRight = false;
        this.holds = false;
        this.buttons=[];
        setTimeout(function () {
                    first.success=false;
                }, 300);
        
    }

    lel() {
        console.log("lel")
    }

    onClick() {
        background(0);
        if (!this.setup) {
            this.button = new Circle(width / 2, height / 6, 30);
            this.button.color = color(127, 20, 127);
            this.button.on("click", function (event) {
                first.toCenter = true;
                console.log("click");
            });
            this.setup = true;
        }
        this.button.draw();
        var A = this.button.x - width / 2;
        var B = this.button.y - height / 2;
        var rSq = (A * A) + (B * B);
        var r = sqrt(rSq);
        if (this.toCenter) {;
            if (r < 0.3) {
                r = 0;
            } else {
                r -= 0.7
            }
            this.angle += 2;
        }
        this.button.x = sin(this.angle) * r + width / 2;
        this.button.y = cos(this.angle) * r + height / 2;
        this.angle += 1;
        this.button.update(mouseX, mouseY, mouseIsPressed, mouseButton);
        if (r == 0) {
            setTimeout(function () {
                if(!first.success){successStage += 1; first.success=true}
            }, 150);
        }
    }



    onPressed() {
        background(50);
        if (!this.setup) {
            this.button = new Circle(width / 2, height / 2, 30);
            this.button.color = color(120, 10, 10);
            this.button.on("pressed", function (event) {
                this.twinkler();
                setTimeout(function () {
                    if(!first.success){successStage += 1; first.success=true}
                }, 300);
            })
            this.setup = true;
        }
        this.button.drawBehind();
        this.button.draw();
        this.button.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    }




    onReleased() {
        background(70);
        if (!this.setup) {
            this.button = new Star(width / 2, height / 2, 30, 70, 8);
            this.button.color = color(230);
            this.button.color2 = color(0, 0, 80);
            this.button.on("pressed", function (event) {
                this.rotate = true;
                this.on("released", function (event) {
                    if(!first.success){successStage += 1; first.success=true}
                });
            });
            this.setup = true;
        }
        this.button.draw();
        this.button.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    }



    onRightClick() {
        if (!this.setup) {
            this.button = new Square(width / 2, height / 2, width, height);
            this.button.color = color(75);
            this.mouse = new Mouse();
            this.button.on("rightClick", function (event) {
                first.clickedRight = true;
                first.button2 = new Square(mouseX + 62, mouseY + 22, 120, 40);
                first.button2.color = color(175);
                first.button2.on("pressed", function (event) {
                    if(!first.success){successStage += 1; first.success=true}
                })
            })
            this.setup = true;
        }
        this.button.draw();
        this.button.update(mouseX, mouseY, mouseIsPressed, mouseButton);
        this.mouse.draw();
        this.mouse.rightFlash();
        if (this.clickedRight) {
            push();
            stroke(175);
            strokeWeight(4);
            if (first.button2.wasOver) {
                first.button2.color = color(10, 10, 80);
            } else {
                first.button2.color = color(175);
            }
            this.button2.draw()
            noStroke();
            textSize(18);
            if (first.button2.wasOver) {
                fill(215);
            } else {
                fill(30);
            }
            textAlign(CENTER);
            text('Next', this.button2.x, this.button2.y + 6);
            pop();
            this.button2.update(mouseX, mouseY, mouseIsPressed, mouseButton);
        }
    }



    onDrag() {
        background(151, 22, 19);
        if (!this.setup) {
            this.button = new Lever();
            this.button.on("drag", function (event) {
                if (this.y < 256 - 35 && this.y >= 32) {
                    this.y = mouseY;
                }
            })
            this.setup = true;
        }
        this.button.draw();
        this.button.update(mouseX, mouseY, mouseIsPressed, mouseButton);
        if (this.button.y > 128 && this.button.y < 256 - 35) {
            this.button.y += 3;
        }
        if (this.button.y < 128 && this.button.y > 35) {
            this.button.y -= 3;
        }
        if (this.button.y >= 256 - 38) {
            setTimeout(function () {
                if(!first.success){successStage += 1; first.success=true}
            }, 300);
        }
    }



    onDrop() {
        background(13, 130, 15);
        if (!this.setup) {
            var randomx = random(15, 256 - 15);
            var randomy = random(15, 256 - 15);
            while (randomx > 80 && randomx < 176 && randomy > 80 && randomy < 176) {
                randomx = random(15, 256 - 15);
                randomy = random(15, 256 - 15);
            }
            this.button = new Circle(randomx, randomy, 30);
            this.button.color = color(255);
            this.goal = new Circle(128, 128, 45);
            this.goal.color = color(10);
            this.button.on("drag", function (event) {
                this.x = mouseX;
                this.y = mouseY;
                this.d = 36;
                first.holds = true;
                this.on("drop", function (event) {
                    this.d = 30;
                    first.holds = false;
                    if (first.goal.wasOver) {
                        if(!first.success){successStage += 1; first.success=true}
                    }
                })
            })
            this.setup = true;
        }
        if (this.goal.wasOver && this.holds) {
            this.goal.d = 48;
        } else {
            this.goal.d = 45;
        }
        push();
        stroke(0);
        strokeWeight(3);
        line(128 - sqrt(2) / 4 * 45, 128 - sqrt(2) / 4 * 45, 128 - sqrt(2) / 4 * 45, 128 - sqrt(2) / 4 * 45 - 60)
        strokeWeight(2);
        fill(200, 10, 10);
        triangle(128 - sqrt(2) / 4 * 45, 128 - sqrt(2) / 4 * 45 - 60, 128 - sqrt(2) / 4 * 45, 128 - sqrt(2) / 4 * 45 - 40, 128 - sqrt(2) / 4 * 45 + 20, 128 - sqrt(2) / 4 * 45 - 50)
        pop();
        this.goal.draw();
        this.button.draw();
        this.button.update(mouseX, mouseY, mouseIsPressed, mouseButton);
        this.goal.update(mouseX, mouseY, mouseIsPressed, mouseButton);

    }



    onMoveUp() {
        background(25, 25, 80);
        if (!this.setup) {
            this.button = new PortLine(128, 256, 180, 25);
            this.button.moveMinOffset = 15;
            this.button.on("moveUp", function (event) {
                if(!first.success){successStage += 1; first.success=true}
            })
            this.setup = true;
        }
        this.button.draw();
        this.button.update(mouseX, mouseY, mouseIsPressed, mouseButton);

    }



    onMoveDown() {
        background(25, 25, 80);
        if (!this.setup) {
            this.button = new PortLine(128, 0, 0, 25);
            this.button.moveMinOffset = 15;
            this.button.on("moveDown", function (event) {
                if(!first.success){successStage += 1; first.success=true}
            })
            this.setup = true;
        }
        this.button.draw();
        this.button.update(mouseX, mouseY, mouseIsPressed, mouseButton);

    }



    onMoveLeft() {
        background(25, 25, 80);
        if (!this.setup) {
            this.button = new PortLine(256, 128, 270, 25);
            this.button.moveMinOffset = 15;
            this.button.on("moveLeft", function (event) {
                if(!first.success){successStage += 1; first.success=true}
            })
            this.setup = true;
        }
        this.button.draw();
        this.button.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    }



    onMoveRight() {
        background(25, 25, 80);
        if (!this.setup) {
            this.button = new PortLine(0, 128, 90, 25);
            this.button.moveMinOffset = 15;
            this.button.on("moveRight", function (event) {
                if(!first.success){successStage += 1; first.success=true}
            })
            this.setup = true;
        }
        this.button.draw();
        this.button.update(mouseX, mouseY, mouseIsPressed, mouseButton);

    }



    onHover() {
        background(25, 50, 50);
        if (!this.setup) {
            this.button = new Square(width / 2, height / 2, 80, 80);
            this.button.on("hover", function (event) {
                first.count++
            })
            this.setup = true;
        }
        this.button.w=80+this.count*2;
        this.button.h=80+this.count*2;
        this.button.draw();
        this.button.update(mouseX, mouseY, mouseIsPressed, mouseButton);
        if(this.button.w>=256){
            if(!first.success){successStage += 1; first.success=true}
        }
    }



    onEnter() {
        background(50,52, 25);
        if (!this.setup) {
            this.button = new Circle(width / 2, height / 2, 10);
            this.button.color = color(65, 67, 25);
            this.button.on("enter", function (event) {
                this.twinkler();
                setTimeout(function () {
                    if(!first.success){successStage += 1; first.success=true}
                }, 300);
            })
            this.setup = true;
        }
        this.button.draw();
        this.button.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    }



    onLeave() {
        background(50);
        if (!this.setup) {
            this.button = new Circle(width / 2, height / 2, 90);
            this.button.color = color(230, 230, 230);
            this.button.on("leave", function (event) {
                this.twinkler();
                setTimeout(function () {
                    if(!first.success){successStage += 1; first.success=true}
                }, 300);
            })
            this.setup = true;
        }
        this.button.drawBehind();
        this.button.draw();
        this.button.update(mouseX, mouseY, mouseIsPressed, mouseButton);
        if (this.button.wasOver && this.count < 229) {
            this.count += 0.7
        }
        this.button.color = color(230, floor(230 - this.count), floor(230 - this.count))
    }


    onShake() {
        if (!this.setup) {
            this.button = new Square(width / 2, height / 2, width, height);
            this.button.color = color(230);
            this.button.moveMinOffset = 4;
            this.button.on("shake", function(event){
                first.count++;
            });
            for (var i = 0; i < 3; i++) {
                this.buttons[i] = new Circle(mouseX + random(-5,5), mouseY + random(-5, 5), 20);
                this.buttons[i].color = color(random(100, 180));
                this.buttons[i].timer = 1 + i;
                this.buttons[i].angle= random(360);
            }
            this.setup = true;
        }
        this.button.draw();
        this.button.update(mouseX, mouseY, mouseIsPressed, mouseButton);
        for (var i = 0; i < 3; i++) {
            this.buttons[i].draw();
            if(this.count>=this.buttons[i].timer){
                this.buttons[i].x+=cos(this.buttons[i].angle)*3;
                this.buttons[i].y+=sin(this.buttons[i].angle)*3;
            }
            else{this.buttons[i].x=mouseX+random(-5,5);
                this.buttons[i].y=mouseY + random(-5, 5);}
        }
        if(this.count>=3){
            setTimeout(function () {
                if(!first.success){successStage += 1; first.success=true}
            }, 300);
        }
    }



    onMetaKey() {
        background(220);
        if (!this.setup) {
            this.button = new SqToCi(70);
            this.button.color = color(80, 10, 45);
            this.setup = true;
        }
        this.button.draw();
        if (keyCode == 17 && this.button.count < 60) {
            this.button.morph = 1;
        }
        push();
        textSize(18);
        textAlign(CENTER);
        text('Take CONTROL', 128, 30);
        text('of the situation', 128, 60);
        pop();
        if (this.button.count == 60) {
            this.button.color = color(40, 110, 45);
            setTimeout(function () {
                
                if(!first.success){successStage += 1; first.success=true;}
            }, 250);
        }
    }



    onStill() {
        background(225);
        if (!this.setup) {
            this.button = new Circle(width / 2, height / 2, 40);
            this.button.color = color(90, 15, 120);
            this.button.on("still", function (event) {
                if(!first.success){successStage += 1; first.success=true;}
            })
            this.setup = true;
        }
        this.button.draw();
        this.button.update(mouseX, mouseY, mouseIsPressed, mouseButton);
        if (this.button.now() - this.button.lastMoveTime > 300 && this.button.wasOver) {
            push();
            stroke(90, 15, 150);
            noFill();
            strokeWeight(2);
            for (var i = 0; i < 3; i++) {
                ellipse(width / 2, height / 2, 80 + i * 40 - this.count);
            }
            this.count++
                if (this.count == 40) {
                    this.count = 0;
                }
        }

    }
    
    
    do(action){
        if(action=="onClick"){
            this.onClick();
        }
        if(action=="onPressed"){
            this.onPressed();
        }
        if(action=="onReleased"){
            this.onReleased();
        }
        if(action=="onRightClick"){
            this.onRightClick();
        }
        if(action=="onDrag"){
            this.onDrag();
        }
        if(action=="onDrop"){
            this.onDrop();
        }
        if(action=="onMoveUp"){
            this.onMoveUp();
        }
        if(action=="onMoveDown"){
            this.onMoveDown();
        }
        if(action=="onMoveLeft"){
            this.onMoveLeft();
        }
        if(action=="onMoveRight"){
            this.onMoveRight();
        }
        if(action=="onHover"){
            this.onHover();
        }
        if(action=="onEnter"){
            this.onEnter();
        }
        if(action=="onLeave"){
            this.onLeave();
        }
        if(action=="onShake"){
            this.onShake();
        }
        if(action=="onMetaKey"){
            this.onMetaKey();
        }
        if(action=="onStill"){
            this.onStill();
        }
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}
