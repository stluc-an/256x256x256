/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-29 18:17:55
\*----------------------------------------*/
let availableLVL = ["0x0"];//(new Array(256)).fill().map((p, k)=>{k = k.toString(16);while(k.length<2) k = "0"+k;return "0x"+k});
let historyLVL = [];
let failTimeout ;
let failAfter = 14000;
let scoreDom;
let totalDom;
let winDom;
let reloadDom;
let iframeDom;
let iframeWrapperDom;
let lvlDom;
let flagNext = false;
document.addEventListener("DOMContentLoaded", setup);
window.onmessage = onMessageFromLVL;

function setup(){
	lvlDom = document.getElementsByClassName("lvl")[0];
	winDom = document.getElementsByClassName("win")[0];
	scoreDom = document.getElementsByClassName("score")[0];
	totalDom = document.getElementsByClassName("total")[0];
	iframeDom = document.getElementsByTagName("IFRAME")[0];
	reloadDom = document.getElementsByClassName("hidden")[0];
	iframeWrapperDom = document.getElementsByClassName("wrapper")[0];
	iframeDom.onload = onLevelLoaded;
	totalDom.innerText = availableLVL.length;
	requestAnimationFrame(runAnimator);
	nextLVL();
}
function reload(){
	location.reload();
}

function onMessageFromLVL (e){
	if(e.data == "SUCCESS" && flagNext){
		flagNext = false;
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
		reloadDom.classList.remove("hidden");
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
	flagNext = false;
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
	if(iframeDom.src && !flagNext){
		flagNext = true;
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
	console.log(lvl);
	iframeDom.src = "../"+lvl+"/index.html";
}
