/*----------------------------------------*\
  256x256x256 - MouseInteractive.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-13 15:04:55
  @Last Modified time: 2018-02-14 11:20:23
\*----------------------------------------*/
class MouseInteractive{
	constructor(){
		this.mouse;
		this.isHover = false;
		this.listeners = {
			hover : [],
			pressed : [],
			released : [],
		};
		this.mouseWasPressed = false;
	}
	isMouseHover(isTriggable){
		if(isTriggable && this.isHover){
			this.trigger("hover");
		}
        return this.isHover;
    }
    isMousePressed(isTriggable){
    	if(isTriggable && this.isHover && mouseIsPressed && !this.mouseWasPressed){
			this.trigger("pressed");
		}
        return this.isHover && mouseIsPressed;
    }
    isMouseReleased(isTriggable){
    	if(isTriggable && this.isHover && !mouseIsPressed && this.mouseWasPressed){
			this.trigger("released");
		}
        return this.isHover && !mouseIsPressed;
    }
	update(cursorX, cursorY){
		this.mouse = { x : cursorX, y : cursorY };
		this.isHover = typeof this.testHover === "function" && this.testHover(cursorX, cursorY);
		this.isMouseHover(true);
		this.isMousePressed(true);
		this.isMouseReleased(true);
		this.mouseWasPressed = mouseIsPressed;
		return this;
	}
	testHover(){
		console.log("DON'T FORGET TO SETUP testHover");
		return false;
	}
	trigger(eventName){
		let event = {
			type : eventName,
			mouse : this.mouse,
			target : this,
			timestamp : (new Date()).getTime(),
		}
		for(let action of this.listeners[eventName]){
			if(typeof action === "function"){
				action(event);
			}
		}
		return this;
	}
	on(eventName, action){
		if(typeof action === "function"){
			this.listeners[eventName].push(action);
		}
		return this;
	}
	off(eventName, action){
		for(let id in this.listeners[eventName]){
			if(this.listeners[eventName][id] == action){
				this.listeners[eventName].splice(id, 1);
				break;
			}
		}
		return this;
	}
}