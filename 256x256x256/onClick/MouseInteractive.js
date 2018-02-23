/*----------------------------------------*\
  256x256x256 - MouseInteractive.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-06 20:19:17
  @Last Modified time: 2018-02-07 01:59:58
\*----------------------------------------*/



window.MetaKey = null;
/*
function keyPressed() {
	switch(keyCode){
		case SHIFT:
		case CONTROL:
		case OPTION:
		case ALT:
		case 93:
		case 91:
			window.MetaKey = keyCode;
		break;
	}
}

function keyReleased() {
	switch(keyCode){
		case SHIFT:
		case CONTROL:
		case OPTION:
		case ALT:
		case 93:
		case 91:
			window.MetaKey = null;
		break;
	}
}*/

class MouseInteractive{
	constructor(p5){
		this.p5 = p5;
		this.delay = 10;
		this.hover = false;
		this.mouseWasPressed = false;
		this.mouseWasHover = false;
		this.mouseLastPosition = [];
		this.mouseLastMoveTime = 0;
		this.clickCounter = 0;
		this.listeners = {
			hover : function(){},
			enter : function(){},
			leave : function(){},
			pressed : function(){},
			released : function(){},
			click : function(){},
			still : function(){},
		}
		this.testHover = function(){
			console.log("call setTestHover to defined bounds");
		}
	}
	now(){
		return (new Date()).getTime();
	}
	setTestHover(testHover){
		if(typeof testHover === "function"){
			this.testHover = testHover;
		}
	}
	isMouseHover(){
		if(this.hover){
			this.trigger("hover");
			return true;
		}
		return false;
	}
	isMouseEnter(){
		if(!this.mouseWasHover && this.hover){
			this.mouseLastMoveTime = this.now();
			this.trigger("enter");
			return true;
		}
		return false;
	}
	isMouseLeave(){
		if(this.mouseWasHover && !this.hover){
			this.mouseLastMoveTime = this.now();
			this.trigger("leave");
			return true;
		}
		return false;
	}
	isMousePressed(){
		if(!this.mouseWasPressed && this.p5.mouseIsPressed && this.hover){
			this.mouseLastMoveTime = this.now();
			this.trigger("pressed");
			return true;
		}
		return false;
	}
	isMouseReleased(){
		if(this.mouseWasPressed && !this.p5.mouseIsPressed && this.hover){
			this.mouseLastMoveTime = this.now();
			this.trigger("released");
			return true;
		}
		return false;
	}
	isMouseClick(){
		if(!this.hover){
			this.clickCounter = 0;
			return false;
		}
		if(!this.mouseWasPressed && this.p5.mouseIsPressed && this.hover){
			this.clickCounter |= 0x01;
		}
		if(this.clickCounter & 0x01 && this.mouseWasPressed && !this.p5.mouseIsPressed && this.hover){
			this.mouseLastMoveTime = this.now();
			this.clickCounter = 0;
			this.trigger("click");
			return true;	
		}
		return false;
	}
	isStill(){
		if(this.hover){
			if(this.mouseLastPosition[0] !== this.p5.mouseX && this.mouseLastPosition[1] !== this.p5.mouseY) {
				this.mouseLastMoveTime = this.now();
			}
			else if(this.now() - this.mouseLastMoveTime > this.delay){
				this.trigger("still");
				this.mouseLastMoveTime = this.now();
			}
		}	
		return false;
	}
	on(eventName, handler, delay){
		if(typeof delay === "number"){
			this.delay = delay;
		}
		if(typeof handler === "function"){
			this.listeners[eventName] = handler;
		}
		return this;
	}
	off(eventName){
		this.listeners[eventName] = function(){};
		return this;
	}
	
	trigger(type){
		let event = {
			type : type,
			mouse : [this.p5.mouseX, this.p5.mouseY],
			origin : this,
			button : this.p5.mouseButton,
			metaKey : window.MetaKey,
			timestamp : this.now(),
		}
		this.listeners[type].call(this, event);
	}
	lateUpdate(){
		this.hover = this.testHover();
		this.isMouseHover();
		this.isMouseEnter();
		this.isMouseLeave();
		this.isMousePressed();
		this.isMouseReleased();
		this.isMouseClick();
		this.isStill();

		this.mouseWasPressed = this.p5.mouseIsPressed;
		this.mouseWasHover = this.hover;
		this.mouseLastPosition = [this.p5.mouseX, this.p5.mouseY];
	}
}