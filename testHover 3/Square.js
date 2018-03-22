/*----------------------------------------*\
  256x256x256 - Square.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-16 11:02:59
  @Last Modified time: 2018-02-23 01:02:34
\*----------------------------------------*/
/*
// TEST Is MOUSE HOVER    

// DRAW STUFF
if(isMouseHover()){
    fill(128);
} else {
    fill(255);
}
*/

class Square{
	constructor(x, y, w, h){
		this.x = x;
		this.y = y;
		this.w = w;
		this.half_w = this.w / 2;
		this.h = h;
		this.half_h = this.h / 2;
		this.wasHover = false;
		this.enterAction = function(){};
		this.leaveAction = function(){};
		this.actions = [];
	}
	
	isHover(pX, pY){
		return  pY > this.y - this.half_h && 
				pY < this.y + this.half_h && 
				pX > this.x - this.half_w && 
				pX < this.x + this.half_w ;
	}

	draw(){
		rect(this.x, this.y, this.w, this.h);
	}

	update(cursorX, cursorY){
		var isHover = this.isHover(cursorX, cursorY);
		
		if(!this.wasHover && isHover){
			this.actions["enter"](this);

		}
		if(this.wasHover && !isHover){
			this.leaveAction(this);
		}
		this.wasHover = isHover;

		if(isHover && this.actions["over"]){
			this.actions["over"](this);
		}
	}
	on(eventName, action){
		this.actions[eventName] = action;
	}
	off(eventName){
		this.actions[eventName] = function(){};
	}
	onEnter(enterAction){
		this.enterAction = enterAction;
		return this;
	}
	onLeave(leaveAction){
		this.leaveAction = leaveAction;
		return this;
	}
}








