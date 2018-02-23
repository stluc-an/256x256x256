var apps = {}

apps._0x00 = function(){
    let _p5 = undefined;
    
    let _startTime = 0;

    let _handleSucces = function(){
        console.log("default success");
    }
    
    let _handleFail = function(){
        console.log("default fail");
    }
    
    let _now = function(){
        return (new Date()).getTime();
    }
    
    let _hasFail = function(){
        return _startTime != 0 && _now()-_startTime > 14000;
    }
    
    return {
        start : function(){
            if(_startTime != 0)return;
            _startTime = _now();
            _p5.loop();
        },
        stop : function(){
            _startTime = 0;
           _p5.noLoop();
        },
        onSuccess : function(callback){
            if(typeof callback === "function"){
                _handleSucces = callback;
            }
        },
        onFail : function(callback){
            if(typeof callback === "function"){
                _handleFail = callback;
            }
        },
        app : function(p5){
            p5.setup = function() {
                _p5 = p5;
                p5.resizeCanvas(256, 256);
                p5.noLoop();
            }

            p5.draw = function() {
                p5.background(0);
                p5.fill(255);
                p5.ellipse(p5.mouseX, p5.mouseY, 50, 50);

                if(p5.mouseIsPressed){
                    console.log("YO");
                }

                if(_hasFail()){
                    _handleFail();
                }
            }
        }
    }
}

let a = new apps._0x00();

new p5(a.app, "container");

a.onFail(function(){
    console.log("FAIL");
    a.stop();
});