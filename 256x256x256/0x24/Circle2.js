/*----------------------------------------*\
  256x256x256 - Square.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-16 11:02:59
  @Last Modified time: 2018-02-26 17:37:38
\*----------------------------------------*/


class Circle2 extends MouseInteractive{
	constructor(x, y, d){
		super();
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
		noStroke();
		fill(this.color);
		ellipse(this.x, this.y, this.d, this.d);
	}
}








