const divInfo = document.querySelector("#info");
const divSticks = document.querySelector("#sticks");
const divRefresh = document.querySelector("#refresh");


let playerNumber = 1;
let arrayGame = [];

//START
initializationJeuDesBatons();

//function
function play (nombreDeBatons) {

    if (!isGameOver(arrayGame)){
        
        if (nombreValide(arrayGame, nombreDeBatons)) {
            
            retirerBatons(arrayGame, nombreDeBatons);
            afficherTableau(arrayGame);

            if (isGameOver(arrayGame)){
                divInfo.innerHTML = `Le Joueur ${playerNumber} a gagné`;
                divInfo.classList.add("alert-success")
            } else {
                playerNumber = changementTourJoueur(playerNumber);
                afficherTourDuJoueur(playerNumber);
            } 
        } else {
            console.log("Nombre Invalide")
        }         
    }
}

function randomCountSticks(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function afficherTourDuJoueur(playerNumber){
    divInfo.innerHTML = `Tour du Joueur ${playerNumber}`;
}

function changementTourJoueur(playerNumber) {
    if (playerNumber === 1){
        return 2;
    } else {
        return 1;
    }
}

function isGameOver(tableau) {
    if (tableau.length === 1){
        return true;
    }
    return false;
}

function nombreValide(tableau, nombreDeBatons) {
    if (nombreDeBatons > 3 || nombreDeBatons < 1 || nombreDeBatons >= tableau.length) {
        return false;
    } else {
       return true; 
    }
}

function retirerBatons(tableau, nombreDeBatons) {
    
    tableau.splice(0, nombreDeBatons);
}


function afficherTableau(tableau) {
    let content = "";    
    for (i = 0; i < tableau.length; i++) {
        content += tableau[i] + " ";
    }
    divSticks.innerHTML = content;
    
}

function genererTableauVide(nombreElements, element){
	let tableau = [];
	for (let i = 0; i < nombreElements; i++){
	tableau.push(element);
	}
	return tableau;
}

function initializationJeuDesBatons() {    
    arrayGame = genererTableauVide(randomCountSticks(10, 15), "|");
    afficherTableau(arrayGame);
    afficherTourDuJoueur(playerNumber);
    divInfo.classList.remove("alert-success"); 
}


//EVENTS
divRefresh.addEventListener("click", function () {
    initializationJeuDesBatons();
});