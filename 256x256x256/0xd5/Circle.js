class Circle extends MouseInteractive{
    constructor(x, y, d){
        super();
        this.x = x;
        this.y = y;
        this.d = d;
        this.r = this.d / 2;
        this.color = color(37, 168, 162);
    }
    isHover(pX, pY){
        var A = pX - this.x;
        var B = pY - this.y;
        return (A * A + B * B) < this.r * this.r;
    }
    draw(){
        fill(this.color);
        ellipse(this.x, this.y, this.d, this.d);

        fill(0);
    noStroke();
    textSize(10);
    text('Ne me lache pas',this.x-37,this.y);
    }
}