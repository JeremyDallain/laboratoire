const divDifficulty = document.querySelector("#difficulty");
const divGrid = document.querySelector("#grid");
const divScore = document.querySelector("#score");
const divRefresh = document.querySelector("#refresh");

// ------START------ //

let nombreLignes = 3;
let nombreColonnes = 4;

let tableauMemo = genererGrilleVide(nombreLignes, nombreColonnes);
let tableauResultat = genererTableauAleatoire(nombreLignes, nombreColonnes);

let firstClick = [];
let clickCount = 0;
let readyToClick = true;
let countTry = 0;

afficherTableau();

//--Functions

function checkPairs(bouton) {
    if(readyToClick) {
        clickCount++;
        let ligne = bouton.substring(0, 1);
        let colonne = bouton.substring(2, 3);
        tableauMemo[ligne][colonne] = tableauResultat[ligne][colonne];
        afficherTableau();

        if (clickCount > 1){
            readyToClick = false;
            setTimeout(function() {
                if (tableauMemo[ligne][colonne] !== tableauResultat[firstClick[0]][firstClick[1]]){
                    tableauMemo[ligne][colonne] = 0;
                    tableauMemo[firstClick[0]][firstClick[1]] = 0;
                }
                afficherTableau();
                readyToClick = true;
                clickCount = 0;
                firstClick = [ligne, colonne];
                 
            }, 1000);
            countTry++;   
        } else {
            firstClick = [ligne, colonne]; 
        }   
                
    }    
    if(isGameOver(tableauMemo)){
        // countTry++; //car le setTimeout ne laisse pas le temps au count de ++
        divScore.innerHTML = `
        <h5>Bravo ! Vous avez réussi en ${countTry} coups.</h5>`; 
    }
}

// function refresh(nombreLignes, nombreColonnes, tableauMemo, tableauResultat){
//     tableauMemo = genererGrilleVide(nombreLignes, nombreColonnes);
//     tableauResultat = genererTableauAleatoire(nombreLignes, nombreColonnes);
// }

function genererTableauAleatoire(nombreLignes, nombreColonnes) {
    let nombreImages = (nombreLignes * nombreColonnes) / 2;
    let tableauImages = genererTableauVide(nombreImages);
    let arrayRandom = generateArrayImagesRandom(nombreImages, 30);

    let tab = [];
    for(let i = 0; i < nombreLignes; i++){
        let lignes = []
        for(let j = 0; j < nombreColonnes; j++){
            let numeroDisponible = false;
            while (!numeroDisponible) {

                let numeroImageRandom = Math.floor(Math.random() * nombreImages); // entre 0 et (nombre d'image - 1)
                if (tableauImages[numeroImageRandom] < 2) {
                    lignes.push(arrayRandom[numeroImageRandom]); //envoie le numero de l'image [ avec l'indice 0 à (nombre d'image - 1)]
                    tableauImages[numeroImageRandom]++;
                    numeroDisponible = true;
                } 
            }                              
        }
        tab.push(lignes);        
    } 
    return tab;
}

function isGameOver(tableau) {
    let zeroExist = false;
    for (let i = 0; i < tableau.length; i++) {
        for (let j = 0; j < tableau[i].length; j++) {
            if (tableau[i][j] === 0) {
                zeroExist = true;
            }          
        }
    }
    if (zeroExist) {
        return false;
    } else {
        return true;
    }
}

function afficherTableau(){
    let txt = "";

    for (let i = 0; i < tableauMemo.length; i++) {
        txt += "<div class='d-flex justify-content-center' >";
        for (let j = 0; j < tableauMemo[i].length; j++) {
            if (tableauMemo[i][j] === 0) {
                txt += "<button class='btn btn-info m-1' style='width:68px;height:68px' onClick='checkPairs(\"" + i + "-" + j + "\")'></button>";
            } else {
                txt += "<img src='" + getImage(tableauMemo[i][j]) + "' class='m-1' style='width:68px;height:68px'>";
            }            
        }
        txt += "</div>";
    }
    divGrid.innerHTML = txt;
}

//rajouter 30 images
function getImage(valeur){
    switch (valeur){
        case 1 : return "src/images/animaux/1.png";
        break;
        case 2 : return "src/images/animaux/2.png";
        break;
        case 3 : return "src/images/animaux/3.png";
        break;
        case 4 : return "src/images/animaux/4.png";
        break;
        case 5 : return "src/images/animaux/5.png";
        break;
        case 6 : return "src/images/animaux/6.png";
        break;
        case 7 : return "src/images/animaux/7.png";
        break;
        case 8 : return "src/images/animaux/8.png";
        break;
        case 9 : return "src/images/animaux/9.png";
        break;
        case 10 : return "src/images/animaux/10.png";
        break;
        case 11 : return "src/images/animaux/11.png";
        break;
        case 12 : return "src/images/animaux/12.png";
        break;
        case 13 : return "src/images/animaux/13.png";
        break;
        case 14 : return "src/images/animaux/14.png";
        break;
        case 15 : return "src/images/animaux/15.png";
        break;
        case 16 : return "src/images/animaux/16.png";
        break;
        case 17 : return "src/images/animaux/17.png";
        break;
        case 18 : return "src/images/animaux/18.png";
        break;
        case 19 : return "src/images/animaux/19.png";
        break;
        case 20 : return "src/images/animaux/20.png";
        break;
        case 21 : return "src/images/animaux/21.png";
        break;
        case 22 : return "src/images/animaux/22.png";
        break;
        case 23 : return "src/images/animaux/23.png";
        break;
        case 24 : return "src/images/animaux/24.png";
        break;
        case 25 : return "src/images/animaux/25.png";
        break;
        case 26 : return "src/images/animaux/26.png";
        break;
        case 27 : return "src/images/animaux/27.png";
        break;
        case 28 : return "src/images/animaux/28.png";
        break;
        case 29 : return "src/images/animaux/29.png";
        break;
        case 30 : return "src/images/animaux/30.png";
        break;
        default : console.log("cas non traité");
    }
}

function genererGrilleVide(nombreLignes, nombreColonnes){
	let tableau = [];
	for (let i = 0; i < nombreLignes; i++){
		let lignes = [];
		for (let j = 0; j < nombreColonnes; j++){
			lignes.push(0);
		}
		tableau.push(lignes);
	}
	return tableau;
}

function genererTableauVide(nombreElements){
	let tableau = [];
	for (let i = 0; i < nombreElements; i++){
	tableau.push(0);
	}
	return tableau;
}

//------------------------------------------------------------------------
//GENERER LE TABLEAU D'IMAGE ALEATOIRE EN FONCTION DU NOMBRE D'IMAGES SOUHAITEES ET DU NOMBRE D'IMAGES DANS LA BASE D'IMAGES

function generateArrayImagesRandom (countFirstElements, countElementsInBase) {
	let array = returnArrayIncrement(countElementsInBase);
	array = returnArrayShuffle(array);
	array = array.splice(0, countFirstElements)
	return array;
}

function returnArrayShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
    }
    return array;
}

function returnArrayIncrement(countElements) {
	let array = [];
	for (let number = 1; number < countElements + 1; number++){
		array.push(number);
	}
	return array;
}
//--------------------------------------------------------------------------

//---------------EVENTS---------------
//-----BOUTONS DIFFICULTY------

divDifficulty.addEventListener("click", function(event){
    let button = event.target.innerHTML;
    let grille = button.split("x");
    nombreLignes = grille[0];
    nombreColonnes = grille[1];

    tableauMemo = genererGrilleVide(nombreLignes, nombreColonnes);
    tableauResultat = genererTableauAleatoire(nombreLignes, nombreColonnes);

    firstClick = [];
    clickCount = 0;
    readyToClick = true;
    countTry = 0;
    divScore.innerHTML = "";

    afficherTableau();
});

// ---------IMG REFRESH ------

divRefresh.addEventListener("click", function(event){
    tableauMemo = genererGrilleVide(nombreLignes, nombreColonnes);
    tableauResultat = genererTableauAleatoire(nombreLignes, nombreColonnes);

    firstClick = [];
    clickCount = 0;
    readyToClick = true;
    countTry = 0;
    divScore.innerHTML = "";

    afficherTableau();
});