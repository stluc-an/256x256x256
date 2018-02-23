/*----------------------------------------*\
  256x256x256 - Square.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-16 11:02:59
  @Last Modified time: 2018-02-23 10:14:52
\*----------------------------------------*/

class Square{
	constructor(x, y, w, h){
		this.x = x;
		this.y = y;
		this.w = w;
		this.half_w = this.w / 2;
		this.h = h;
		this.half_h = this.h / 2;
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
}