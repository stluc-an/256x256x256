var monOeil;
var clignote = false ;
var follow = false;
var r;
var g;
var b;
var t = 30;
var grow;
var rouge= false;
var vert = false;

var indice = false;

var fond;

function setup(){
	 fond = loadImage("indice.jpg");

    createCanvas(256, 256);
    noStroke();
   	rectMode(CENTER);
  
    monOeil = new Circle(128, 200, 30, 30);
 
   	monOeil.color = color(249,19,73);


   
   
   
   	 monOeil.on("leave", function (event){
    	follow = true ;   

    });

   	
   	 monOeil.on("metaKey", function (event){
   	 	follow =false;
   	 	clignote = true;
   	   triggerSuccess();
    	
    });




 




  	
    
    
}



function draw(){
    background(27,53,97);
    if(indice){
      background(fond);
    }
    
    rectMode(CENTER);
    ellipseMode(CENTER);

    fill(246,250,250);
    ellipse(128,128,150,60);

    fill(27,53,97);
    ellipse(128,128,50,50);
   	
   	noStroke();
     monOeil.draw();
     monOeil.update(mouseX, mouseY, mouseIsPressed, mouseButton);

     if(clignote){
     	r = random(0,255);
     	g = random(0,255);
     	b = random(0,255);

     	t = t + grow;
      monOeil.d = t;

      monOeil.draw();
     	monOeil.color = color(r , g ,b)
     }
    
    if(follow){
    	monOeil.x = mouseX  ;
    	monOeil.y = mouseY ;

    }

    if(t<=30){
     	grow = 1 ;
     	}
    if(t>= 50){
    	grow = - 1;
   		 }

        if(monOeil.y<=128){
          follow = false;
          indice = true;
        } 
}


function triggerSuccess(){
  top.postMessage('SUCCESS','*');
  console.log("BRAVO");
 }

