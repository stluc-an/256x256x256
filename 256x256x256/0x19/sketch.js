
/*-----------------------------------------*\
    BESOIN : 
    attraper l'événement mouseHover
\*-----------------------------------------*/
var monAnimTropCool;
var maLigne;
var pressed = false;
function setup(){
    createCanvas(256, 256); 
    rectMode(CENTER);
    ellipseMode(CENTER);
    noStroke();
   monAnimTropCool = new Anim(10, -110, 100);
//  monAnimTropCool = new Anim(128, 128   , 100);

	maLigne = new BigLine(width - 50, -10, width - 50, -110);

	maLigne.on("pressed", function(event){
		maLigne.off("pressed");
		pressed = true;
		monAnimTropCool.on("enter", function(){
			triggerSuccess();
		});
	});




/*

    new Animator(
        500,
        function(percent){
        	monAnimTropCool.y = lerp(monAnimTropCool.y, this.d, pow(percent, 5) );
        }, 
        function(){
            this.d = height - monAnimTropCool.size;
        }, 
        function(){
        	new Animator(
		        12500, 
		        function(percent){
		        	monAnimTropCool.x = lerp(this.o, this.d, percent );
		        }, 
		        function(){
		            this.o = monAnimTropCool.x;
		            this.d = width + monAnimTropCool.size;
		        }
		    ).start();
        },
        1000
    ).start();

    new Animator(
        500,
        function(percent){
        	maLigne.y2 = lerp(maLigne.y2, this.d2, pow(percent, 5) );
        }, 
        function(){
            this.d2 = height - monAnimTropCool.size - 50;
        }, 
        function(){
        	let b = 10;
			new Animator(
		        500,
		        function(percent){
		        	maLigne.x2 = lerp(this.d2-b, this.d2+b * percent, sin(percent * PI * 2) * 0.5 + 0.5 );
		        }, 
		        function(){
		            this.d2 = maLigne.x2;
		        }, 
		        function(){
		        	maLigne.x2 = this.d2;
		        	if(!pressed){
		        		b *= 0.4;
		            	this.start();
		            }
		        }
		    ).start();        	
        },
        1500
    ).start();
    */
}

function draw(){
    background(63, 178, 63);
    
    monAnimTropCool.draw();
    maLigne.draw();

    maLigne.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    monAnimTropCool.update(mouseX, mouseY, mouseIsPressed, mouseButton);

    if(pressed){
    	maLigne.x2 = mouseX;
    	maLigne.y2 = mouseY;
    }
    Animator.update();
}

			
function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
}