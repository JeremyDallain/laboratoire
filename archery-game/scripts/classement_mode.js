const userCursor = document.querySelector("#userCursor");
const userImpact = document.querySelector("#userImpact");
// const points = document.querySelector("#points");
const divTime = document.querySelector("#time");
const divParameters = document.querySelector("#parameters");
const divScore = document.querySelector("#score");
const divRefresh = document.querySelector("#refresh");
const start = document.querySelector("#start");

const divRules = document.querySelector("#rules");
const buttonRules = document.querySelector("#buttonRules");

const divWindLeft = document.querySelector("#windLeft");
const divWindRight = document.querySelector("#windRight");

// const welcomeMessage = `<h6>45 secondes pour tirer 10 flèches.<br>
// Prenez en compte le vent et la distance..<br>
// Réalisez le meilleur Score !</h6>`

let shotPoints = 0;
let totalPoints = 0;

let countShots = 0;

let xWind = 0;
let xWindToShow = 0;
let yToShow = 0;
let distance = 0;

let arrowL = "";
let arrowR = "";

let xClick = 0;
let yClick = 0;
let xAfterCalcul = 0;
let yAfterCalcul = 0;

let compteur;
let timer;

let gameIsStart = false;

let gameIsFinish = false;


let isTooLate = false;



//EVENTS

function afficherMasquerRegles() {
    if(divRules.classList.contains("d-none")) {
        divRules.classList.remove("d-none");
        showOnlyRules();
        buttonRules.innerHTML = "Masquer les règles";
    } else {
        divRules.classList.add("d-none");
        start.classList.remove("d-none");
        buttonRules.innerHTML = "Voir les règles";
    }
}

start.addEventListener("click", function () {
    gameIsStart = true;
    start.classList.add("d-none"); 
    refreshArcheryGame();
    showScore ();
    showTime(); 
    showParameters();      
    buttonRules.classList.add("d-none");
    inputPseudo.classList.add("d-none");
});

userCursor.addEventListener('click', function(event) {		
	if (countShots < 10 && compteur !== -1 && gameIsStart) {
		shot(event);
        calculPoints();
        showImpactPoints();        
        showScore ();

		if(countShots < 10){
            hideWindArrow()
            generateNewParameters(); 
            showParameters();
		} 
		
	} 
	if (countShots === 10) {
    redirectScore();
	}
});

refresh.addEventListener("click", function () {
    refreshPage();
});


//function SHOW

function showWindArrow(){
    if (xWind < 0) {
        divWindLeft.style.width = xWind + "px";
        divWindLeft.classList.remove("d-none");
    } else if (xWind > 0) {
        divWindRight.style.width = xWind + "px";
        divWindRight.classList.remove("d-none");
    } 
}

function hideWindArrow(){
    divWindLeft.classList.add("d-none");
    divWindRight.classList.add("d-none");
}

function showOnlyRules(){
    refreshAllDiv();
    start.classList.add("d-none"); 
}

function showScore () {
    divScore.innerHTML = `	Nombre de tirs :  <strong>${countShots} / 10</strong><br>
	Total des Points : <strong>${totalPoints}</strong>`;
}

function showTime () {
    compteur = 60;
    divTime.innerHTML = "<span class='blue'>GO !</span>";
    timer = setInterval(function() {	
        divTime.innerHTML = compteur;
        compteur -= 1;
        if (compteur === -1) {
          stopTimer();
          redirectScoreTimeOver();   
        }
    }, 1000);   
}

function stopTimer() {
  clearInterval(timer);
}


function redirectScoreTimeOver() {  
  isTooLate = true;
  divTime.innerHTML = "<span class='red'>Trop Tard !</span>";
  redirection = setInterval(function() {	      
    addScoreAndTimerInURL();
  }, 2000);  
}

function redirectScore() {
    stopTimer();
    divTime.innerHTML = "<span class='green'>Bravo !</span>";
    redirection = setInterval(function() {	      
      addScoreAndTimerInURL();
    }, 2000);  
    
}

function addScoreAndTimerInURL() {  
  window.location.href = "tableau-des-scores.php?score=" + totalPoints+ "&isTooLate=" + isTooLate;
}

function showImpactPoints() {	
	let xPosition = xAfterCalcul + 138;
	let yPosition = yAfterCalcul + 138;
	let impact = document.createElement('div');
	impact.style.position = 'absolute';
	impact.style.left = xPosition + 'px';
    impact.style.top = yPosition + 'px';
    impact.innerHTML = `<em>${shotPoints}</em>`;
	userImpact.appendChild(impact);
	setTimeout(function() {
        userImpact.removeChild(impact);
    }, 2000);	    
}

function showParameters() {    
	arrowL = "";
	arrowR = "";
	if (xWind > 0) { 
		arrowR = "▷"; 
		xWindToShow = xWind;
	}
	if (xWind < 0) { 
		arrowL = "◁";	
		xWindToShow = -xWind;
    }
    showWindArrow();
	//tranformer xWind en positif pour le show
	divParameters.innerHTML = `<h5>Vent : ${arrowL} ${xWindToShow} ${arrowR} <br> Distance : ${distance} m</h5>`;
}


//CALCULS

function calculPoints () {
	shotPoints = 125 - Math.round(Math.hypot(Math.abs(xAfterCalcul), Math.abs(yAfterCalcul)));
	if (shotPoints < 0) {
		shotPoints = 0;
    }

    totalPoints += shotPoints;
    countShots++;
}

function shot(event){
	xClick = event.offsetX - 150;
	yClick = event.offsetY - 150;
	xAfterCalcul = returnXAfterCalcul();
	yAfterCalcul = returnYAfterCalcul();
}

function returnXAfterCalcul () {
	let xDistance = Math.round(distance / 10);
	if (xWind < 0) {
		xDistance = -xDistance;
	} else if (xWind === 0) {
		xDistance = 0;
	}
	return xClick + xWind + xDistance;
}

function returnYAfterCalcul () {
	return yClick + distance;
}

// GENERATE

function generateNewParameters() {
    hideWindArrow()
	xWind = xWindRandom();
	distance = distanceRandom();
}

function distanceRandom() {
	return entierAleatoire(10, 100);
}

function xWindRandom() {
	return entierAleatoire(-80, 80);
}

function entierAleatoire(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reInitializeValues(){
    shotPoints = 0;
    totalPoints = 0;
    countShots = 0;
    xWind = 0;
    xWindToShow = 0;
    distance = 0;
    arrowL = "";
    arrowR = "";
    xClick = 0;
    yClick = 0;
    xAfterCalcul = 0;
    yAfterCalcul = 0;
    hideWindArrow()
}

function refreshArcheryGame() {        
    reInitializeValues();
    refreshAllDiv();     
    generateNewParameters();  
}

function refreshPage() {
    reInitializeValues();
    refreshAllDiv();
    start.classList.remove("d-none");
    start.innerHTML = "Start";
    clearInterval(time);
    gameIsStart = false;
    buttonRules.classList.remove("d-none"); 
    inputPseudo.classList.remove("d-none");  
}

function refreshAllDiv() {
    hideWindArrow()
    divParameters.classList.remove("alert");
    divParameters.classList.remove("alert-success");
    divParameters.classList.remove("alert-warning");
    divParameters.innerHTML = "";
    divTime.innerHTML = "";     
    divScore.innerHTML = "";  

}