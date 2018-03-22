var firstAction = "onClick";
var secondAction = "onClick";
var lastActionOne = "none";
var lastActionTwo = "none";
var successStage=0 
var first;
var hasReset=false;


function setup () {
    createCanvas(256, 256); 
    angleMode(DEGREES);
    rectMode(CENTER);
    ellipseMode(CENTER);
    noStroke();
    first= new First();
}


function draw () {
    actionOne = "onEnter"//document.getElementById("selectorOne").value;
    actionTwo = "onMoveRight"//document.getElementById("selectorTwo").value;
    if(actionOne != lastActionOne || actionTwo != lastActionTwo){
        successStage=0;
        first.reset();
        hasReset=false;
    }
    
    if(successStage===0){
        first.do(actionOne);
    }
    
    else if(successStage===1){
        if(!hasReset){first.reset(); hasReset=true;}
        first.do(actionTwo);
    }
    if(successStage===2){
        background(0);
        push()
        textSize(30);
        textAlign(CENTER);
        fill(235);
        text("Victoire!", width/2, height/2);
        triggerSuccess();   
    }

    lastActionOne = actionOne;
    lastActionTwo = actionTwo;
}

function triggerSuccess(){
    top.postMessage('SUCCESS', '*');
}

