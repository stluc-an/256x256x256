var value = 125;


function setup() {
                    createCanvas(256, 256, WEBGL);
                 }


function draw() {
    
                    background(0);
                    noStroke();
    
                    fill(value);
                    rotateX(frameCount * 0.01);
                    rotateY(frameCount * 0.01);
                    box(60, 60, 60);
                }

    
function mouseDragged() {   value = mouseX;
            
                            if (value <= 100) {value = 100};
                        }
function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
    console.log("BRAVO");
}