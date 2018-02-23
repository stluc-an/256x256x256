/*----------------------------------------*\
  256x256x256 - Square.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-13 15:03:50
  @Last Modified time: 2018-02-14 11:38:31
\*----------------------------------------*/
class Square extends MouseInteractive {
    constructor(x, y, w, h){
    	super();
        this.setX(x);
        this.setY(y);
        this.setW(w);
        this.setH(h);
        super.testHover = function(cursorX, cursorY){
			return  cursorY > this.y - this.half_h && 
					cursorY < this.y + this.half_h && 
					cursorX > this.x - this.half_w && 
					cursorX < this.x + this.half_w ;
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
    setW(w){
        if(w != this.w){
            this.w = w;
            this.half_w = w*0.5;
        }
        return this;
    }
    setH(h){
        if(h != this.h){
            this.h = h;
            this.half_h = h*0.5;
        }
        return this;
    }
    draw(){
        this.animator(this);
        rect(this.x, this.y, this.w, this.h);
        super.update(mouseX, mouseY);
        return this;
    }
    animator(){
        
    }
}