/*----------------------------------------*\
  256x256x256 - BigLine.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-03-08 19:16:50
  @Last Modified time: 2018-03-08 19:41:53
\*----------------------------------------*/
class BigLine extends MouseInteractive{
	constructor(x1, y1, x2, y2){
		super();
		this.x1 = x1;
		this.y1 = y1;
		this.x2 = x2;
		this.y2 = y2;
		
		this.color = color(255, 255, 255);
	}
	isHover(cursorX, cursorY){
		return  cursorY > min(this.y1, this.y2) - 5 && 
				cursorY < max(this.y1, this.y2) + 5 && 
				cursorX > this.x1 - 5 && 
				cursorX < this.x2 + 5 ;
	}
	draw(){
		push();
		stroke(this.color);
		strokeWeight(10);
		beginShape();
		vertex(this.x1, this.y1);
		vertex(this.x2, this.y2);
		endShape();
		pop();
	}
}