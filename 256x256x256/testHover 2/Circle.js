/*----------------------------------------*\
  256x256x256 - Circle.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-13 15:04:08
  @Last Modified time: 2018-02-14 11:38:13
\*----------------------------------------*/
class Circle extends MouseInteractive {
    constructor(x, y, d){
    	super();
        this.setX(x);
        this.setY(y);
        this.setD(d);
        super.testHover = function (cursorX, cursorY){
			// PYTHAGORE
			// a^2 + b^2 = c^2
			let a = abs(cursorX - this.x);
			let b = abs(cursorY - this.y);
			let c = abs(this.r);
			return a*a + b*b < c*c  
	    };
    }
    setX(x){
        if(x != this.x){
            this.x = x;
        }
        return this;
    }
    setY(y){
        if(y != this.y){
            this.y = y;
        }
        return this;
    }
    setD(d){// diameter + rayon
        if(d != this.d){
            this.d = d;
            this.r = d*0.5;
        }
        return this;
    }
    draw(){
        this.animator(this);
        ellipse(this.x, this.y, this.d);
        super.update(mouseX, mouseY);
        return this;
    }
    animator(){

    }
}