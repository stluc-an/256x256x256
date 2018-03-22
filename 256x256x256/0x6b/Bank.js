class Square extends MouseInteractive {
    constructor(x, y, w, h) {
        super();
        this.x = x;
        this.y = y;
        this.w = w;
        this.half_w = this.w / 2;
        this.h = h;
        this.half_h = this.h / 2;
        this.color = color(255, 255, 255);
    }

    isHover(cursorX, cursorY) {
        return cursorY > this.y - this.half_h &&
            cursorY < this.y + this.half_h &&
            cursorX > this.x - this.half_w &&
            cursorX < this.x + this.half_w;
    }
    draw() {
        fill(this.color);
        rect(this.x, this.y, this.w, this.h);
    }

}

class Circle extends MouseInteractive {
    constructor(x, y, d) {
        super();
        this.x = x;
        this.y = y;
        this.d = d;
        this.r = this.d / 2;
        this.twink = false;
        this.twinkles = [];
        this.twinkOff = 0;
        this.color = color(255, 255, 255);
    }
    isHover(pX, pY) {
        var A = pX - this.x;
        var B = pY - this.y;
        return (A * A + B * B) < this.r * this.r;
    }
    draw() {
        if (this.twink) {
            for (var i = 0; i < 8; i++) {
                this.twinkles[i].draw();
            }
            this.twinkOff += 1;
            if (this.twinkOff == 20) {
                this.twink = false;
                this.twinkOff = 0;
            }
        }
        fill(this.color);
        ellipse(this.x, this.y, this.d, this.d);
    }

    drawBehind() {
        fill(this.color);
        ellipse(this.x, this.y, this.d + 30, this.d + 30);
        fill(80);
        ellipse(this.x, this.y, this.d + 15, this.d + 15);
    }

    twinkler() {
        if (!this.twink) {
            this.twink = true;
            for (var i = 0; i < 8; i++) {
                this.twinkles[i] = this.createTwinkle(45 * i);
            }
        }
    }

    createTwinkle(angle) {
        return {
            color: this.color,
            angle: angle,
            Xone: this.x,
            Yone: this.y,
            Xtwo: this.x + (cos(angle) * 10),
            Ytwo: this.y + (sin(angle) * 10),
            draw: function () {
                push();
                stroke(230);
                strokeWeight(4);
                line(this.Xone, this.Yone, this.Xtwo, this.Ytwo);
                this.Xone += (cos(angle) * 5);
                this.Yone += (sin(angle) * 5);
                this.Xtwo += (cos(angle) * 5);
                this.Ytwo += (sin(angle) * 5);
                pop();
            }
        }
    }
}

class PortLine extends MouseInteractive {
    constructor(startX, startY, angle, space) {
        super();
        this.startX = startX;
        this.startY = startY;
        this.angle = angle;
        this.space = space;
        this.count = 0;
    }

    isHover(cursorX, cursorY) {
        return (cursorY > this.startY % 256 + Math.abs(sin(this.angle)) * -(this.space + 3) &&
            cursorY < this.startY % 256 + Math.abs(sin(this.angle)) * (this.space + 3) + Math.abs(cos(this.angle) * 256) &&
            cursorX > this.startX % 256 + Math.abs(cos(this.angle)) * -(this.space + 3) &&
            cursorX < this.startX % 256 + Math.abs(cos(this.angle)) * (this.space + 3) + Math.abs(sin(this.angle) * 256));
    }

    draw() {
        var lighted = floor(this.count / 20)
        push();
        stroke(215);
        strokeWeight(3);
        for (var i = 1; i <= 5; i++) {
            line(this.startX + cos(this.angle) * -this.space + sin(this.angle) * 52 * lighted + sin(this.angle) * 3 * i + sin(this.angle) * 8,
                this.startY + sin(this.angle) * -this.space + cos(this.angle) * 52 * lighted + cos(this.angle) * 3 * i + cos(this.angle) * 8,
                this.startX + sin(this.angle) * 52 * lighted + sin(this.angle) * 3 * i + sin(this.angle) * 16 + sin(this.angle) * 8,
                this.startY + cos(this.angle) * 52 * lighted + cos(this.angle) * 3 * i + cos(this.angle) * 16 + cos(this.angle) * 8)
            line(this.startX + cos(this.angle) * this.space + sin(this.angle) * 52 * lighted + sin(this.angle) * 3 * i + sin(this.angle) * 8,
                this.startY + sin(this.angle) * this.space + cos(this.angle) * 52 * lighted + cos(this.angle) * 3 * i + cos(this.angle) * 8,
                this.startX + sin(this.angle) * 52 * lighted + sin(this.angle) * 3 * i + sin(this.angle) * 16 + sin(this.angle) * 8,
                this.startY + cos(this.angle) * 52 * lighted + cos(this.angle) * 3 * i + cos(this.angle) * 16 + cos(this.angle) * 8)
        }
        pop()
        push();
        stroke(255);
        strokeWeight(3);
        line(this.startX + cos(this.angle) * this.space,
            this.startY + sin(this.angle) * this.space,
            this.startX + cos(this.angle) * this.space + sin(this.angle) * 256,
            this.startY + sin(this.angle) * this.space + cos(this.angle) * 256)
        line(this.startX + cos(this.angle) * -this.space,
            this.startY + sin(this.angle) * -this.space,
            this.startX + cos(this.angle) * -this.space + sin(this.angle) * 256,
            this.startY + sin(this.angle) * -this.space + cos(this.angle) * 256)
        for (var i = 0; i < 5; i++) {
            line(this.startX + cos(this.angle) * -this.space + sin(this.angle) * 52 * i + sin(this.angle) * 8,
                this.startY + sin(this.angle) * -this.space + cos(this.angle) * 52 * i + cos(this.angle) * 8,
                this.startX + sin(this.angle) * 52 * i + sin(this.angle) * 16 + sin(this.angle) * 8,
                this.startY + cos(this.angle) * 52 * i + cos(this.angle) * 16 + cos(this.angle) * 8)
            line(this.startX + cos(this.angle) * -this.space + sin(this.angle) * 52 * i + sin(this.angle) * 16 + sin(this.angle) * 8,
                this.startY + sin(this.angle) * -this.space + cos(this.angle) * 52 * i + cos(this.angle) * 16 + cos(this.angle) * 8,
                this.startX + sin(this.angle) * 52 * i + 2 * sin(this.angle) * 16 + sin(this.angle) * 8,
                this.startY + cos(this.angle) * 52 * i + 2 * cos(this.angle) * 16 + cos(this.angle) * 8)
            line(this.startX + cos(this.angle) * this.space + sin(this.angle) * 52 * i + sin(this.angle) * 8,
                this.startY + sin(this.angle) * this.space + cos(this.angle) * 52 * i + cos(this.angle) * 8,
                this.startX + sin(this.angle) * 52 * i + sin(this.angle) * 16 + sin(this.angle) * 8,
                this.startY + cos(this.angle) * 52 * i + cos(this.angle) * 16 + cos(this.angle) * 8)
            line(this.startX + cos(this.angle) * this.space + sin(this.angle) * 52 * i + sin(this.angle) * 16 + sin(this.angle) * 8,
                this.startY + sin(this.angle) * this.space + cos(this.angle) * 52 * i + cos(this.angle) * 16 + cos(this.angle) * 8,
                this.startX + sin(this.angle) * 52 * i + 2 * sin(this.angle) * 16 + sin(this.angle) * 8,
                this.startY + cos(this.angle) * 52 * i + 2 * cos(this.angle) * 16 + cos(this.angle) * 8)
        }
        pop();
        this.count++;
        if (this.count == 100) {
            this.count = 0;
        }
    }
}



class Star extends MouseInteractive {
    constructor(x, y, radius1, radius2, points) {
        super();
        this.color = color(255, 255, 255);
        this.color2 = color(127, 127, 127);
        this.x = x;
        this.y = y;
        this.radius1 = radius1;
        this.radius2 = radius2;
        this.points = points;
        this.angle = 360 / points;
        this.rotate = false;
        this.rotAngle = 0;
        this.halfAngle = this.angle / 2;
    }

    isHover(pX, pY) {
        var A = pX - this.x;
        var B = pY - this.y;
        return (A * A + B * B) < this.radius2 * this.radius2;
    }

    draw() {
        push()
        fill(this.color2);
        ellipse(this.x, this.y, this.radius2 * 2, this.radius2 * 2);
        pop();
        push();
        translate(this.x, this.y);
        if (this.rotate) {
            rotate(this.rotAngle);
            this.rotAngle += 3;
        }
        fill(this.color);
        beginShape();
        for (var a = 0; a < 360; a += this.angle) {
            var sx = -sin(a) * this.radius2;
            var sy = -cos(a) * this.radius2;
            vertex(sx, sy);
            sx = -sin(a + this.halfAngle) * this.radius1;
            sy = -cos(a + this.halfAngle) * this.radius1;
            vertex(sx, sy);
        }
        endShape(CLOSE);
        pop();
    }
}



class SqToCi extends MouseInteractive{
    constructor(diameter) {
        super();
        this.diameter = diameter;
        this.rayon = diameter / 2;
        this.points = [];
        this.count = 0;
        this.morph=0;
        this.color = color(80);

        for (var angle = -45; angle < 45; angle += 3) {
            this.points.push({
                x: -this.rayon + this.rayon * (45 + angle) / 45,
                y: -this.rayon,
                cx: sqrt(2)*this.rayon * cos(angle - 90),
                cy: sqrt(2)*this.rayon * sin(angle - 90),
            })
        }
        for (var angle = 45; angle < 135; angle += 3) {
            this.points.push({
                x: this.rayon,
                y: -this.rayon + this.rayon * (-45 + angle) / 45,
                cx: sqrt(2)*this.rayon * cos(angle - 90),
                cy: sqrt(2)*this.rayon * sin(angle - 90),
            })
        }
        for (var angle = 135; angle < 225; angle += 3) {
            this.points.push({
                x: this.rayon - this.rayon * (-135 + angle) / 45,
                y: this.rayon,
                cx: sqrt(2)*this.rayon * cos(angle - 90),
                cy: sqrt(2)*this.rayon * sin(angle - 90),
            })
        }
        for (var angle = 225; angle < 315; angle += 3) {
            this.points.push({
                x: -this.rayon,
                y: this.rayon - this.rayon * (-225 + angle) / 45,
                cx: sqrt(2)*this.rayon * cos(angle - 90),
                cy: sqrt(2)*this.rayon * sin(angle - 90),
            })
        }
        for (var i = 0; i < 120; i++) {
            this.points[i].movex = (this.points[i].cx - this.points[i].x) / 60;
            this.points[i].movey = (this.points[i].cy - this.points[i].y) / 60;
        }
    }
    
    isHover(pX, pY) {
        var A = pX - 128;
        var B = pY - 128;
        return (A * A + B * B) < this.r * this.r;
    }

    draw() {
        push();
        translate(width / 2, height / 2);
        fill(this.color);
        beginShape();
        for (var i = 0; i < 120; i++) {
            vertex(this.points[i].x, this.points[i].y);
            if (this.morph!=0) {
                this.points[i].x += this.points[i].movex*this.morph;
                this.points[i].y += this.points[i].movey*this.morph;
            }
        }
        endShape(CLOSE);
        pop();
        if (this.morph!=0 && this.count <= 60 && this.count >= 0) {
            this.count += 1*this.morph;
        }
        if(this.count==60 || this.count==0){
            this.morph=0;
        }
    }
}

class Lever extends MouseInteractive{
    constructor(){
        super();
        this.x=128;
        this.y=35;
        this.d=40;
        this.r=this.d/2;
    }
    
    isHover(pX, pY) {
        var A = pX - this.x;
        var B = pY - this.y;
        return (A * A + B * B) < this.r * this.r;
    }
    
    draw(){
        push();
        fill(125);
        rect(128, 128, 50, 160, 25);
        fill(15);
        rect(128, 128, 25, 130, 13);
        //
        fill(55);
        rect(128,this.y/2+64, 18, 128-Math.abs(this.y))
        fill(95);
        ellipse(this.x, this.y, this.d,this.d)
        pop();
    }
}



class Mouse extends MouseInteractive{
    constructor(){
        super();
        this.x=128;
        this.y=128;
        this.color=color(50);
        this.leftColor=this.color;
        this.rightColor=this.color;
        this.count=0;
    }
    
    draw(){
        push();
        stroke(230);
        strokeWeight(2);
        fill(this.color);
        rect(this.x, this.y+10, 80, 130, 90,90,90,60);
        fill(this.leftColor);
        rect(this.x-20, this.y-30, 40, 50, 38,0,0,0);
        fill(this.rightColor);
        rect(this.x+20, this.y-30, 40, 50, 0,38,0,0);
        fill(this.color);
        rect(this.x, this.y-30, 12,30, 6);
        pop();
    }
    
    rightFlash(){
        if(this.count%50==0){
            this.rightColor=this.color;
        }
        if(this.count%50==25){
            this.rightColor=color(130);
        }
        this.count+=1;
    }
    
    
    
}



        




        /*push();
        stroke(230);
        strokeWeight(2);
        fill(50);
        rect(128, 128+10, 80, 130, 90,90,90,60);
        rect(128-20, 128-30, 40, 50, 38,0,0,0);
        rect(128+20, 128-30, 40, 50, 0,38,0,0);
        rect(128, 128-30, 12,30, 6);
        pop();*/


