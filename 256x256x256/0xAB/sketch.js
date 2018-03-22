var monRond;
var follow =false;
var monRond2;

var taille = false;

var t = 30;




function setup(){
    createCanvas(256, 256);
    background(255, 102, 153);
    noStroke();
    ellipseMode(CENTER);
  
    monRond = new Circle(128,200, 30,30);
 
    monRond.color = color(51, 216, 235);


    monRond2 = new Circle(128, 60,t,t);
 
    monRond2.color = color(235,235,51);
   
   
    monRond.on("hover", function (event){
          follow =true;
             
             monRond2.on("enter", function (event){
              taille = true;
                if(t>=500){
                taille = false;
                 }
              monRond2.color=color(51,235,69);
              triggerSuccess();

              
             });




      
    });

 


  	
    
    
}



function draw(){
    background(41, 61, 107);
    
    
    noStroke();
     monRond.draw();
     monRond.update(mouseX, mouseY, mouseIsPressed, mouseButton);

    monRond2.draw();
     monRond2.update(mouseX, mouseY, mouseIsPressed, mouseButton);

     if(follow){
      monRond.x=mouseX;
      monRond.y = mouseY;
     }

     if(taille){
      t=t+2;
      monRond2 = new Circle(128, 60,t,t);
      monRond2.color=color(51,235,69);

     }

    

    


}


  function triggerSuccess(){
     top.postMessage('SUCCESS','*');
      console.log("BRAVO");
 } 
 