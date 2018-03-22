/*----------------------------------------*\
  256x256x256 - Square.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-16 11:02:59
  @Last Modified time: 2018-02-26 17:37:38
\*----------------------------------------*/


class Circle extends MouseInteractive{
	constructor(x, y, d){
		super();
		this.x = x;
		this.y = y;
		this.d = d;
		this.r = this.d / 2;
		this.color = color(205, 145, 104);
	}
	isHover(pX, pY){
		var A = pX - this.x;
   		var B = pY - this.y;
    	return (A * A + B * B) < this.r * this.r;
	}
	draw(){
		fill(this.color);
		ellipse(this.x, this.y, this.d, this.d);
		noStroke();
        textSize(15);
        text('AGAIN !', 13, 130); 
	}
  
}








