var monCarre;
var monCarre2;
var position 
var follow = false;
function setup(){
    createCanvas(256, 256);
    background(28, 73, 87);
    noStroke();
    rectMode(CENTER);
    position = 180;
   
    monCarre = new Square(position, 120, 50,50);
    monCarre2 = new Square(50, 120,50, 50);
   
    monCarre2.color = color(0,0,0,0);
   
    monCarre.color = color(223, 78, 56);
    monCarre.on("enter", function (event){
         monCarre.color = color(249, 150, 21);
    });
    monCarre.on("leave", function (event){
          monCarre.color = color(223, 78, 56);
    });

    monCarre.on("rightClick", function (event){
       follow = true;
        monCarre2.on("enter", function (event){
              triggerSuccess();
            
        });
    });
    
    
}

function draw(){
    background(28, 73, 87);
    noFill();
    stroke(223, 78, 56);
    monCarre2.draw();
     monCarre.update(mouseX, mouseY, mouseIsPressed, mouseButton);
      monCarre2.update(mouseX, mouseY, mouseIsPressed, mouseButton);
      monCarre.draw();
    if(follow){
        monCarre.x = mouseX;
         monCarre.y = mouseY;
    }
    /*fill(monCarré.isHover(mouseX, mouseY) ? 0 : 223, 78, 56 );
   

}

    function mousePressed(){
    if(monCarré.isHover){
        position = mouseX;
        
    }*/
    
       
}
  function triggerSuccess(){
     top.postMessage('SUCCESS','*');
      console.log("BRAVO");
 } 

