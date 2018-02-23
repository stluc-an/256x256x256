/*----------------------------------------*\
  256x256x256 - Square.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-06 22:44:29
  @Last Modified time: 2018-02-07 01:50:04
\*----------------------------------------*/
class Square extends MouseInteractive {
	constructor(p5){
		super(p5);
		
		this.defaultColor = this.p5.color(128, 128, 128);
		this.hoverColor = this.p5.color(255, 255, 255);

		super.setTestHover(function(){
			return !(this.p5.mouseX < this.x - (this.w >> 1) || 
				  	 this.p5.mouseX > this.x + (this.w >> 1) || 
				  	 this.p5.mouseY < this.y - (this.h >> 1) || 
				  	 this.p5.mouseY > this.y + (this.h >> 1) );	
		});
		this.startAt = this.now();
	}
	
	draw(x, y, w, h){
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		let time = Math.max(0, 500 - (this.now()-this.startAt));
		let time1 = Math.max(0, 100 - (this.now()-this.startAt));
		this.w += 20 * Math.sin(time * 0.02 );
		this.h += 20 * Math.sin(time1 * 0.1 );
		this.p5.fill(this.hover ? this.hoverColor: this.defaultColor);
		this.p5.rect(this.x, this.y, this.w, this.h);
		this.lateUpdate();
	}
}


class Circle extends MouseInteractive {
	constructor(p5){
		super(p5);
		this.defaultColor = this.p5.color(128, 128, 128);
		this.hoverColor = this.p5.color(255, 255, 255);
		super.setTestHover(function(){
			return Math.hypot(Math.abs(this.p5.mouseX - this.x), Math.abs(this.p5.mouseY - this.y)) < (this.r >> 1);	
		});
		this.startAt = this.now();
	}
	
	draw(x, y, r){
		this.x = x;
		this.y = y;
		this.r = r;
		let time = Math.max(0, 300 - (this.now()-this.startAt));
		this.r += 20 * Math.sin(time * 0.1 );
		this.p5.fill(this.hover ? this.hoverColor: this.defaultColor);
		this.p5.ellipse(this.x, this.y, this.r);
		this.lateUpdate();
	}
}
