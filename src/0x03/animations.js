/*----------------------------------------*\
  256x256x256 - animations.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-03-01 13:13:36
  @Last Modified time: 2018-03-01 13:13:50
\*----------------------------------------*/

function lerp(A, B, t){
	return A + t * (B - A);
}

function Magnify(time, target){
	new Animator(
		time*2, 
		function(percent){
			target.style.fontSize = (this.FS + 20 * Math.sin(Math.PI * percent)) + "px";
		}, function(){
			this.FS = 20;
		}, function(){
			target.style.fontSize = this.FS + "px";
		}
	).start();
}

function Minify(time, target){
	new Animator(
		time*2, 
		function(percent){
			target.style.fontSize = (this.FS - 10 * Math.sin(Math.PI * percent)) + "px";
		}, function(){
			this.FS = 20;
		}, function(){
			target.style.fontSize = this.FS + "px";
		}
	).start();
}

function loose(target){
	new Animator(
		1500, 
		function(percent){
			percent = Math.pow(percent, 0.3);
			target.style.fontSize = (this.FS + 50 * Math.sin(
														Math.PI * lerp(
															1, 0.95, lerp(
																1, 0.2, Math.abs(
																	Math.sin(
																		0.3 * percent*2*Math.PI
																	)
																)
															)
														)
													)
									) + "px";
		}, function(){
			this.FS = 20;
		}, function(){
			target.style.fontSize = this.FS + "px";
			this.start();
		}
	).start();
}

function win(target){
	new Animator(
		500, 
		function(percent){
			target.style.fontSize = (this.FS + 50 * Math.sin(
														-1 * Math.PI * lerp(
															1, 0.95, lerp(
																1, 0.2, Math.abs(
																	Math.sin(
																		0.3 * percent*2*Math.PI
																	)
																)
															)
														)
													)
									) + "px";
		}, function(){
			this.FS = 20;
		}, function(){
			target.style.fontSize = this.FS + "px";
			this.start();
		}
	).start();
}

function Close(callback){
	new Animator(
		500, 
		function(percent){
			percent = Math.pow(percent, 0.5)
			//wrapper.style.opacity = percent;
			iframeWrapperDom.style.height = ((1-percent) * 256)+"px";
			iframeDom.style.marginTop = (-1 * (percent) * 128)+"px";
		}, function(){}, function(){
			//wrapper.style.opacity = 0;
			iframeWrapperDom.style.height = "0px";
			iframeDom.style.marginTop = "-128px";
			if(callback)callback();
		}
	).start();
}

function Open(callback){
	new Animator(
		500, 
		function(percent){
			percent = Math.pow(percent, 2)
			//wrapper.style.opacity = percent;
			iframeWrapperDom.style.height = ((percent) * 256)+"px";
			iframeDom.style.marginTop = (-1 * (1-percent) * 128)+"px";
		},
		function(){},
		function(){
			//wrapper.style.opacity = 1;
			iframeWrapperDom.style.height = "256px";
			iframeDom.style.marginTop = "0px";
			if(callback)callback();
		}
	).start();
}
