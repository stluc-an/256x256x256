var isHover = false;

function setup() {
    createCanvas(256, 256);}
    rectMode(CENTER);
    
function draw() {
    
    background(204, 106, 99);
    
    
    if (mouseY<200 && mouseX<200 && mouseY>25 && mouseX>25){
                                                                fill(0)
                                                                translate(width /2, height /2);
                                                                var a = atan2(mouseY - height/2, mouseX - width/2);
                                                                rotate(a);
                                                                rect(-30, -5, 75, 75);

                                                                isHover = true;}


    else{   fill(0);
            ellipse(120, 120, 50, 50);
            isHover = false;}

    print(mouseIsPressed);

}
