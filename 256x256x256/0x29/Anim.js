class Anim extends MouseInteractive{
	constructor(x, y, size){
		super ();
		this.x = x;
		this.y = y;

        this.size = size;
        this.imgList = [];
	    this.imgList.push(loadImage("img/rect 01.png"));
        this.imgList.push(loadImage("img/rect 02.png"));
        this.curseur = 0 ; 
	}
	
	isHover(cursorX, cursorY){
		return  cursorY > this.y - this.size/2 &&
				cursorY < this.y + this.size/2 && 
				cursorX > this.x - this.size/2 && 
				cursorX < this.x + this.size/2 ;
	}
	draw(){
		var currentImg = this.imgList[this.curseur];
		image(currentImg, this.x, this.y, this.size, this.size);

		this.curseur ++ ;
		if(this.curseur >= this.imgList.length){
			this.curseur = 0;
		}
       // if (frameCount % 60 === 0)
	}
	
}