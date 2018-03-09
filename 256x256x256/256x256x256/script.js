/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2018-03-08 19:00:30
\*----------------------------------------*/
//let availableLVL = (new Array(256)).fill().map((p, k)=>{k = k.toString(16);while(k.length<2) k = "0"+k;return "0x"+k});
let availableLVL = ["0x19", "0xB1", "0xB2"];
let historyLVL = [];
let failTimeout ;
let failAfter = 14000;
let scoreDom;
let winDom;
let iframeDom;
let iframeWrapperDom;
let lvlDom;

document.addEventListener("DOMContentLoaded", setup);
window.onmessage = onMessageFromLVL;

function setup(){
	lvlDom = document.getElementsByClassName("lvl")[0];
	winDom = document.getElementsByClassName("win")[0];
	scoreDom = document.getElementsByClassName("score")[0];
	iframeDom = document.getElementsByTagName("IFRAME")[0];
	iframeWrapperDom = document.getElementsByClassName("wrapper")[0];
	iframeDom.onload = onLevelLoaded;
	requestAnimationFrame(runAnimator);
	nextLVL();
}

function onMessageFromLVL (e){
	if(e.data == "SUCCESS"){
		clearTimeout(failTimeout);
		nextLVL();
	}
}

function gameOver(success){
	let anim;
	if(success){
		winDom.innerText = "YOU WIN";
		anim = function(){
			win(winDom);
		}
	}else{
		winDom.innerText = "YOU LOOSE";	
		anim = function(){
			loose(winDom);
		}
	}
	Close(anim);
}

function nextLVL(){
	let lvl = getRandomLVL();
	if(isGameOver(lvl)){
		setScore2Display();
		return gameOver(true);//with success
	}
	setLvl2Display(lvl);
	Close(function(){
		Magnify(375, scoreDom);
		setScore2Display();
		setLevel(lvl);
	});
}

function prevLVL(){
	let lvl = getLastLVL();
	if(isGameOver(lvl)){
		setScore2Display();
		return gameOver(false);//without success
	}
	setLvl2Display(lvl);
	Close(function(){
		Minify(375, scoreDom);
		setScore2Display();
		setLevel(lvl);
	});
}

function runAnimator(){
	Animator.update();
	requestAnimationFrame(runAnimator);
}

function onLevelLoaded(){
	if(iframeDom.src){
		setTimeout(function(){
			Open(function(){
				clearTimeout(failTimeout);
				failTimeout = setTimeout(prevLVL, failAfter);
			});
		}, 750);
	}
}

function isGameOver(lvl){
	return undefined == lvl;
}

function getLastLVL(){
	availableLVL.push(historyLVL.pop());
	return historyLVL[historyLVL.length-1];
}

function getRandomLVL(){
	// return level name 
	// or
	// return undefined in case of no more level
	let currentLvl = availableLVL.splice(Math.floor(Math.random() * availableLVL.length), 1)[0];
	if(undefined != currentLvl){
		historyLVL.push(currentLvl);
	}
	return currentLvl; 
}

function setLvl2Display(lvl){
	lvlDom.innerText = lvl;
}

function setScore2Display(){
	let score = historyLVL.length - 1;
	scoreDom.innerText = score>0 ? score : 0  ;
}

function setLevel(lvl){
	iframeDom.src = "../"+lvl+"/index.html";
}
