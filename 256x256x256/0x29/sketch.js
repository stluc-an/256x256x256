
/*-----------------------------------------*\
    BESOIN : 
    attraper l'événement mouseHover
\*-----------------------------------------*/
var bouton;
var maSuperAnim;
function setup(){
    createCanvas(256, 256); 
    
    //Anim(CENTER); : Attention au point d'encrage
    

    noStroke();
    console.log("YO");
    maSuperAnim = new Anim(10,10,100);

    bouton = new Anim(128, 128, 30);
   // bouton2 = new Anim;
    //var pressedAnim = pressed(bouton);

    bouton.on("pressed", function(event){
        console.log(event);
        bouton.on("released", function(event){
            bouton.on("moveRight", function(event){
             console.log(event);
            });
        });
    })
}

function draw(){
    background(0);
    bouton.draw();
    bouton.update(mouseX, mouseY, mouseIsPressed, mouseButton);
    Animator.update();
}


function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
}