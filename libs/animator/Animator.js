/*----------------------------------------*\
  256x256x256 - Animator.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-26 12:28:47
  @Last Modified time: 2018-02-28 00:26:48
\*----------------------------------------*/
class Animator{
	// duration : the duration of the animation [REQUIRED]
	// onAnim : function called to perform the animation [REQUIRED]
	// onAnimStart : function called on animation start
	// onAnimStop : function called on animation stop
    constructor(duration, onAnim, onAnimStart, onAnimStop, delay){
        this.duration = duration;
        this.started = false;
        this.finished = false;
        this.delay = delay || 0;
        this.onAnim = onAnim || function(){};
        this.onAnimStop = onAnimStop || function(){};
        this.onAnimStart = onAnimStart || function(){};
        Animator.animations.push(this);
    }
    start(){
    	this.startAt = Animator.now() + this.delay;
        this.stopAt = this.startAt + this.duration;
        this.started = true;
        this.finished = false;
        this.onAnimStart();
        return this;
    }
    run(now){
        if(this.forcedStop) return this;
        if(!this.started) return this;
		if( now > this.startAt && now < this.stopAt){
            this.onAnim((now - this.startAt) / this.duration);
        }else if(now >= this.stopAt){
            this.started = false;
            this.finished = true;
            this.onAnimStop();
        }
        return this;
    }
    stop(){
        this.forcedStop = true;
        this.started = false;
        this.finished = true;
        this.onAnimStop();
    }
    static now(){ // https://www.w3schools.com/jsref/jsref_gettime.asp
    	return (new Date()).getTime();
    }
    static update(){ // Animators manager : run anim and delete finished ones
    	let now = Animator.now();
    	for(let anim of Animator.animations){ // A nice [ES6] way to iterate over Array
     	   anim.run(now);
    	}
    	Animator.animations = Animator.animations.filter(anim => !(anim.finished||anim.forcedStop));
    }
}
Animator.animations = [];
