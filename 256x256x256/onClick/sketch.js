
/*-----------------------------------------*\
    BESOIN : 
    attraper l'événement mouse click
\*-----------------------------------------*/

var apps = {}

apps._0x00 = function(){
    let _p5;
    let _startTime = 0;
    let _object = undefined;
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
        },
        stop : function(){
            _startTime = 0;
            _p5.noLoop();
        },
        onSuccess : function(callback){
            if(typeof callback === "function"){
                _handleSucces = callback;
            }
            return this;
        },
        onFail : function(callback){
            if(typeof callback === "function"){
                _handleFail = callback;
            }
            return this;
        },
        app : function(p5){
			var s;
            _p5 = p5;
			p5.setup = function (){
				p5.resizeCanvas(256, 256);
				p5.rectMode(p5.CENTER);
				p5.ellipseMode(p5.CENTER);
				s = new Square(p5).on("released", function(e){
					this.off(e.type);
					s = new Circle(p5).on("still", function(e){
						this.off(e.type);
						this.startAt = this.now();
						_handleSucces();
					}, 1000);
				}, 3000);
			}
			p5.draw = function(){
				p5.background(0);
				if(s){
					s.draw(p5.width/2, p5.height/2, 50, 50);
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
})
.onSuccess(function(){
    console.log("GREAT");
    a.stop();
})
.start();