const userCursor = document.querySelector("#userCursor");
const userImpact = document.querySelector("#userImpact");
// const points = document.querySelector("#points");
const divXYMouve = document.querySelector("#XYMouve");
const divParameters = document.querySelector("#parameters");
// const divScore = document.querySelector("#score");
// const divRefresh = document.querySelector("#refresh");
// const start = document.querySelector("#start");
const divDetails = document.querySelector("#details");
const divRules = document.querySelector("#rules");
const buttonRules = document.querySelector("#buttonRules");

const divWindLeft = document.querySelector("#windLeft");
const divWindRight = document.querySelector("#windRight");
// const welcomeMessage = `<h6>45 secondes pour tirer 10 flèches.<br>
// Prenez en compte le vent et la distance..<br>
// Réalisez le meilleur Score !</h6>`

let shotPoints = 0;
// let totalPoints = 0;

// let countShots = 0;

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

// let compteur;
// let time;

// let gameIsStart = false;

let changeParametersAuto = false;

//START

generateNewParameters(); 
showParameters();

//EVENTS


userCursor.addEventListener('click', function(event) {		
	shot(event);
    calculPoints();
    showImpactPoints();  
    showDetails() ;
    if (changeParametersAuto) {
        changeParameters();
    }
    
});

function changeParameters() {
    hideWindArrow()
    generateNewParameters(); 
	showParameters();
}

function afficherMasquerRegles() {
    if(divRules.classList.contains("d-none")) {
        divRules.classList.remove("d-none");
        // showOnlyRules();
        buttonRules.innerHTML = "Masquer les règles";
    } else {
        divRules.classList.add("d-none");
        // start.classList.remove("d-none");
        buttonRules.innerHTML = "Voir les règles";
    }
}

function startAutoParameters() {
    if (changeParametersAuto === false){
        changeParametersAuto = true;
    } else {
        changeParametersAuto = false;
    }    
}

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
    showWindArrow()
	//tranformer xWind en positif pour le show
	divParameters.innerHTML = `<h5>Vent : ${arrowL} ${xWindToShow} ${arrowR} <br> Distance : ${distance} m</h5>`;
}

function showDetails () {
    yClickToShow = -yClick;
    yAfterCalculToShow = -yAfterCalcul;
    divDetails.innerHTML = `<span class="text-primary">Paramètres du dernier tir :</span><br>
                            Vent : <strong>${arrowL} ${xWindToShow} ${arrowR}</strong> <br>
                            Distance : <strong>${distance} mètres</strong><br>
                            <span class="text-primary">Details du dernier tir :</span> <br>
 							Clic : <strong>x ${xClick} y ${yClickToShow}</strong> <br>
 							Impact : <strong>x ${xAfterCalcul}	y ${yAfterCalculToShow}</strong> <br>
 							
                            Points : <strong>${shotPoints} points</strong>`;
}


//CALCULS

function calculPoints () {
	shotPoints = 125 - Math.round(Math.hypot(Math.abs(xAfterCalcul), Math.abs(yAfterCalcul)));
	if (shotPoints < 0) {
		shotPoints = 0;
    }

    // totalPoints += shotPoints;
    // countShots++;
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
}

// function refreshArcheryGame() {        
//     reInitializeValues();
//     refreshAllDiv();     
//     generateNewParameters();  
// }

// function refreshPage() {
//     reInitializeValues();
//     refreshAllDiv();
//     start.classList.remove("d-none");
//     start.innerHTML = "Start";
//     clearInterval(time);
//     gameIsStart = false;
//     buttonRules.classList.remove("d-none");   
// }

// function refreshAllDiv() {
//     divParameters.classList.remove("alert");
//     divParameters.classList.remove("alert-success");
//     divParameters.classList.remove("alert-warning");
//     divParameters.innerHTML = "";
//     divTime.innerHTML = "";     
//     divScore.innerHTML = "";  
// }

userCursor.addEventListener('mousemove', function(event) {		
    let xMove = event.offsetX - 150;
    let yMove = event.offsetY - 150;
    let yMoveToShow = -yMove;
    divXYMouve.innerHTML = `x : ${xMove}, y : ${yMoveToShow}`;
});

userCursor.addEventListener('mouseout', function(event) {		
    divXYMouve.innerHTML = '';
});
