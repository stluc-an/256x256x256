var monCarre;
/*var monCarre2;*/
var positionX 
var followY = false;
var followX = false;
var enHaut = false;
var red = 0;
var green = 0;
var blue = 255;

function setup(){
    createCanvas(256, 256);
/*    background(28, 73, 87);*/
    noStroke();
    rectMode(CENTER);
    positionX = 50;
    monCarre = new Square(positionX, 226, 50,50);
/*    monCarre2 = new Square(50, 120,50, 50);
    monCarre2.color = color(0,0,0,0);*/
    monCarre.color = color(223, 78, 56);

    // monCarre.on("enter", function (event){
    //      monCarre.color = color(53, 78, 223);
    //      console.log(event);

    // });
   /* monCarre.on("leave", function (event){
          monCarre.color = color(223, 78, 56);
          console.log("event")
    });*/

    monCarre.on("moveUp", function (event){
       followY = true;
       
       console.log(event);
       if (mouseY<55){
        monCarre.off("moveUp", function (event){});
        followY = false;
        enHaut=true
       }
     });

    monCarre.on("moveRight", function (event){
      if (enHaut){
        followX = true;
        console.log(event);
        if (mouseX>200){
        monCarre.off("moveRight", function (event){});
        followX = false;
        }
      }

/*        monCarre2.on("enter", function (event){
            console.log("win");
        });*/
    });
  }


function draw(){
  if(followY){
    monCarre.y = mouseY;
    //red = 255-mouseY;
    //green = 255-mouseY;
  }
 /* col = color(red,green,blue);*/
  /*background(mouseY, mouseY * 0.5, 150);*/

  background(70,mouseY,100,100);
  monCarre.color = color(0);
  monCarre.update(mouseX, mouseY, mouseIsPressed, mouseButton);
  monCarre.draw();


    noFill();
    stroke(223, 78, 56);
    if(followX){
         monCarre.x = mouseX;
    }
    /*fill(monCarré.isHover(mouseX, mouseY) ? 0 : 223, 78, 56 );
   

}

    function mousePressed(){
    if(monCarré.isHover){
        position = mouseX;
        
    }*/
    
       
}


