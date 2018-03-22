/*----------------------------------------*\
  256x256x256 - Square.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-16 11:02:59
  @Last Modified time: 2018-02-23 10:14:59
\*----------------------------------------*/


class Circle{
	constructor(x, y, d){
		this.x = x;
		this.y = y;
		this.d = d;
		this.r = this.d / 2;

	}
	isHover(pX, pY){
		var A = pX - this.x;
   		var B = pY - this.y;
    	return (A * A + B * B) < this.r * this.r;
	}
	draw(){
		ellipse(this.x, this.y, this.d, this.d);
	}
}








