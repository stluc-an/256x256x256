/*----------------------------------------*\
  256x256x256 - Square.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-16 11:02:59
  @Last Modified time: 2018-02-23 11:45:40
\*----------------------------------------*/

class Square{
	constructor(x, y, w, h){
		this.x = x;
		this.y = y;
		this.w = w;
		this.half_w = this.w / 2;
		this.h = h;
		this.half_h = this.h / 2;
		this.wasOver = false;
		this.enterAction;
	}
	
	isHover(cursorX, cursorY){
		return  cursorY > this.y - this.half_h && 
				cursorY < this.y + this.half_h && 
				cursorX > this.x - this.half_w && 
				cursorX < this.x + this.half_w ;
	}

	onEnter(enterAction){
		this.enterAction = enterAction;
	}
	offEnter(){
		this.enterAction = function(){}
	}


	update(cursorX, cursorY){
		var isHover = this.isHover(cursorX, cursorY);
		if(this.wasOver == false && isHover){
			this.enterAction(this);
		}
		if(isHover){
			console.log(">>>> OVER	");	
		}


		this.wasOver = isHover;
	}





	draw(){
		rect(this.x, this.y, this.w, this.h);
	}






}