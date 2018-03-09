/*----------------------------------------*\
  256x256x256 - Anim.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-03-02 10:29:45
  @Last Modified time: 2018-03-09 10:59:11
\*----------------------------------------*/

class Anim extends MouseInteractive{
	constructor(x, y, size){
		super ();
		this.x = x;
		this.y = y;
		this.size = size;
		this.imgList = [];
		this.imgList.push(loadImage("img/pia18303_full_1000.jpg"));
		this.imgList.push(loadImage("img/pia18313_1041_1000.jpg"));
		this.imgList.push(loadImage("img/pia18321_1041_1000.jpg"));
		this.curseur = 0;
		this.newImgTime = millis();
	}
	
	isHover(cursorX, cursorY){
		return  cursorY > this.y && 
				cursorY < this.y + this.size && 
				cursorX > this.x && 
				cursorX < this.x + this.size ;
	}
	draw(){
		var currentImg = this.imgList[this.curseur];
		image(currentImg, this.x, this.y, currentImg.width / 10, currentImg.height / 10);
		
		if(millis() - this.newImgTime > 1000/15){
			this.newImgTime = millis();
			this.curseur = this.curseur + 1;
			if(this.curseur == 3){
				this.curseur=0;
			}
		}
	}
}




