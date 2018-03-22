/*----------------------------------------*\
  256x256x256 - Triangle.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-13 22:19:44
  @Last Modified time: 2018-02-14 11:38:09
\*----------------------------------------*/
class rPolygone extends MouseInteractive {
    constructor(x, y, d, s){
    	super();
        this.setX(x);
        this.setY(y);
        this.setD(d);
        this.setS(s);
        this.points = [];
        super.testHover = function (cursorX, cursorY){
        	// https://stackoverflow.com/questions/8721406/how-to-determine-if-a-point-is-inside-a-2d-convex-polygon
			let i = 0;
			let j = this.points.length - 1;
			let result = false;
			for (; i < this.points.length; j = i++) {
				let pI = {x : this.x + this.r * this.points[i].x, y : this.y + this.r * this.points[i].y};
				let pJ = {x : this.x + this.r * this.points[j].x, y : this.y + this.r * this.points[j].y};
				if (
					pI.y > cursorY != pJ.y > cursorY &&
            		cursorX < (pJ.x - pI.x) * (cursorY - pI.y) / (pJ.y-pI.y) + pI.x
            	) {
          			result = !result;
         		}
      		}
      		return result;
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
    setD(d){ // diameter
        if(d != this.d){
            this.d = d;
            this.r = d*0.5;
        }
        return this;
    }
    setS(s){ // vertex count
        if(s != this.s){
            let a = TWO_PI / s;
            this.points = [];
            for(let i = 1 ; i <= s ; i++){
                this.points.push({ x : cos(a * i), y : sin(a * i) });
            }
        }
        return this;
    }
    draw(){
        this.animator(this);
        beginShape();
        for(let point of this.points){
        	vertex(this.x + this.r * point.x, this.y + this.r * point.y);
        }
        endShape(CLOSE);
        super.update(mouseX, mouseY);
        return this;
    }
    animator(){

    }
}