/*----------------------------------------*\
  256x256x256 - MouseInteractive.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-25 20:07:45
  @Last Modified time: 2018-02-26 14:11:48
\*----------------------------------------*/
class MouseInteractive{
	constructor(){
		this.wasOver = false;
		this.wasPressed = false;
		this.actions = {};
		this.oldXPosition = 0;
		this.oldYPosition = 0;
		this.cursorX;
		this.cursorY;
		this.moveHistory = [];
		this.moveMinOffset = 5;
		this.lastMoves = [];
		this.lastMoveTime = 0;
		this.clickCounter = 0;
		this.mousePressedPos = false;
		this.draging = false;
	}
	on(eventName, enterAction){
		this.actions[eventName] = enterAction;
	}

	off(eventName){
		this.actions[eventName] = function(){}
	}
	buildEvent(eventName){
		return {
			target : this,
			eventName : eventName,
			timestamp : this.now(),
			cursor : [this.cursorX, this.cursorY]
		}
	}
	trigger(eventName){
		if(this.actions[eventName]){
			// invocation without context
			//this.actions[eventName](this.buildEvent(eventName));

			// invocation with context
			this.actions[eventName].call(this, this.buildEvent(eventName));
            //console.log(this);
		}
	}
	now(){
		return (new Date()).getTime();
	}
	getRecentActionList(){
		let now = this.now();
		for(let t in this.moveHistory){
			if (now - t > 500){
				delete this.moveHistory[t];
			}
		}
		return 	Object.keys(
					Object.values(this.moveHistory)
					.reduce(
						function(acc, v){
							acc[v] = 1 + (acc[v] ? acc[v] : 0);
							return acc;
						}, {}
					)
				);
	}
	update(cursorX, cursorY, cursorDown, cursorBtn){
		this.cursorX = cursorX;
		this.cursorY = cursorY;
		this.cursorBtn = cursorBtn;

		let isHover = this.isHover(cursorX, cursorY);
		let now = this.now();
			
		let distX = this.cursorX - this.oldXPosition;
        this.distX=distX;
		let distY = this.cursorY - this.oldYPosition;
        this.distY=distY;

		if (cursorX != this.oldXPosition || cursorY != this.oldYPosition){
			this.lastMoveTime = now;
		}
		

		if(!this.wasOver && isHover){
			this.trigger("enter");
		}
		
		if(isHover){
			this.trigger("hover");
		}
		
		if(this.wasOver && !isHover){
			this.trigger("leave");
			this.lastMoves = [];
		}
		
		if(isHover && !this.wasPressed && cursorDown){
			this.trigger("pressed");
			if(cursorBtn == "right"){
				this.clickCounter |= 0x10;
			}else{
				this.clickCounter |= 0x01;	
			}
			this.mousePressedPos = [this.cursorX, this.cursorY];
		}

		if(isHover && this.mousePressedPos && (Math.abs(this.mousePressedPos[0]-this.cursorX) > this.moveMinOffset || Math.abs(this.mousePressedPos[1]-this.cursorY) > this.moveMinOffset) ){
			this.trigger("drag");
			this.draging = true;
		}

		if(isHover && this.wasPressed && !cursorDown){
			this.trigger("released");
			if(this.draging){
				this.trigger("drop");
				this.draging = false;
			}else if(this.clickCounter & 0x01 ){
				this.trigger("click");
			}else if(this.clickCounter & 0x10 ){
				this.trigger("rightClick");
			}
			this.clickCounter = 0;
			this.mousePressedPos = false;
		}

		if(isHover && cursorX - this.oldXPosition == 0 && cursorY - this.oldYPosition == 0){
			if(now - this.lastMoveTime > 2000){
				this.trigger("still");
				this.lastMoveTime = now;
			}
			this.lastMoves = [];	
		}
		
		if(isHover && this.getRecentActionList().length > 2){
			this.trigger("shake");
			this.moveHistory = [];
			this.clickCounter = 0;
		}
		
		if(isHover && !this.lastMoves.includes("moveRight") && distX > this.moveMinOffset){
			this.trigger("moveRight");
			this.moveHistory[now] = "right";
			this.lastMoves.push("moveRight");
			this.clickCounter = 0;
		}
		
		if(isHover && !this.lastMoves.includes("moveLeft") && distX < -this.moveMinOffset){
			this.trigger("moveLeft");
			this.moveHistory[now] = "left";
			this.lastMoves.push("moveLeft");
			this.clickCounter = 0;
		}
		
		if(isHover && !this.lastMoves.includes("moveDown") && distY > this.moveMinOffset){
			this.trigger("moveDown");
			this.moveHistory[now] = "down";
			this.lastMoves.push("moveDown");
			this.clickCounter = 0;
		}
		
		if(isHover && !this.lastMoves.includes("moveUp") && distY < -this.moveMinOffset){
			this.trigger("moveUp");
			this.moveHistory[now] = "up";
			this.lastMoves.push("moveUp");
			this.clickCounter = 0;
		}
		
		if(!isHover){
			this.clickCounter = 0;
			this.draging = false;
			this.mousePressedPos = false;
		}
		
		this.oldXPosition = cursorX;
		this.oldYPosition = cursorY;
		this.wasOver = isHover;
		this.wasPressed = cursorDown;
	}
}