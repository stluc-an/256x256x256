/*----------------------------------------*\
  256x256x256 - Square.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-16 11:02:59
  @Last Modified time: 2018-02-26 18:58:36
\*----------------------------------------*/

class Anim extends MouseInteractive{
	constructor(x, y, size){
		super ();
		this.x = x;
		this.y = y;
		this.size = size;
		this.imgList = [];
		this.imgList.push(loadImage("img/1.jpg"));
		this.imgList.push(loadImage("img/2.jpg"));
		this.imgList.push(loadImage("img/2.png"));
		console.log(this.imgList);
		this.curseur = 0;
		this.newImgTime = millis();
	}
	
	isHover(cursorX, cursorY){
		return  cursorY > this.y - this.size/2 && 
				cursorY < this.y + this.size/2 && 
				cursorX > this.x - this.size/2 && 
				cursorX < this.x + this.size/2 ;
	}
	draw(){
		var currentImg = this.imgList[this.curseur];
	 
		image(currentImg,this.x,this.y,currentImg.width/1,currentImg.height/1);

			if(millis () - this.newImgTime > 500){
			this.newImgTime = millis();
			this.curseur = this.curseur + 1;
			if(this.curseur == 3){
			this.curseur = 0;
			  }
		}
	} 
	
}