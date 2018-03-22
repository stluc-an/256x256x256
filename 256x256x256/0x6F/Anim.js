class Anim extends MouseInteractive{
 constructor(x,y,size){
     super();
     this.x = x;
     this.y = y;
     this.size = size;
     this.imgList = [];
     this.curseur = 0;
     
 }
    isHover(cursorX,cursorY){
        return cursorY > this.y - this.size/2 &&
               cursorY < this.y + this.size/2 &&
               cursorX > this.x - this.size/2 &&
               cursorX < this.x + this.size/2 ;
        
        
    }
    draw(){
       var currentImg = this.imgList[this.curseur];
       image(currentImg,this.x,this.y,currentImg.width / 10,currentImg.height /10); 
       
        if(millis() - this. newImgTime > 300){
        this.newImgTime = millis();
        this.curseur = this.curseur + 1;
        if(this.curseur == 3){
        this.curseur=0;
        }
       }
    }
}
