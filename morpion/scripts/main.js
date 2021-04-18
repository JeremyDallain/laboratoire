const divInfo = document.querySelector("#info");
const divGridGame = document.querySelector("#gridGame");
const divRefresh = document.querySelector("#refresh");

//START
let indexJoueur = 1;
let casesJouees = 0;
let morpion = [];

initializationMorpion();

// GAME
divGridGame.addEventListener("click", function (event){
    // On recupère la ligne et la colonne
    let idCase = event.target.id;
    let ligne = idCase.substring(0, 1);
    let colonne = idCase.substring(2, 3);    
    
    //Si la partie n'est pas terminée et qu'il reste des cases
    if (!isGameOver(morpion) && casesJouees < 9){      
        // On verifie que la case n'est pas prise    
        if (caseEstValide(ligne, colonne, morpion)) {
            // on assigne l'index du joueur
            morpion[ligne - 1][colonne - 1] = indexJoueur;
            casesJouees++;
            afficherGrille(morpion);

            //En cas de fin de Partie
            if (isGameOver(morpion)) {
                divInfo.innerHTML = "Le Joueur " + indexJoueur + " a gagné !";  
                divInfo.classList.add("alert-success");
                divGridGame.classList.add("bg-light");      
            } else if (casesJouees === 9) {
                divInfo.innerHTML = "Egalité !";
                divInfo.classList.add("alert-secondary");
                divGridGame.classList.add("bg-light");
            } else {
                // Sinon on change de joueur
                indexJoueur = changementDeJoueur(indexJoueur);
                afficherTour();
            }
        }
    }
});

//FUNCTIONS

function changementDeJoueur (indexJoueur) {
    if (indexJoueur === 1) {
        return 2;
    } else {
        return 1;
    }
}

function afficherTour () {
    if (indexJoueur === 1) {
        divInfo.innerHTML = "Au tour du Joueur 1 : X";
    } else {
        divInfo.innerHTML = "Au tour du Joueur 2 : O";
    }
}

function isGameOver (tableau) {
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i][0] === tableau[i][1] && tableau[i][0] === tableau[i][2] && tableau[i][0] !== 0) { 
            return true;
        } 
        if (tableau[0][i] === tableau[1][i] && tableau[0][i] === tableau[2][i] && tableau[0][i] !== 0)  {
            return true
        }            
    }
    if ((tableau[0][0] === tableau[1][1] && tableau[0][0] === tableau[2][2] 
        || tableau[0][2] === tableau[1][1] && tableau[0][2] === tableau[2][0]) && tableau[1][1] !== 0) {
        return true;
    }
    return false;
}

function caseEstValide(ligne, colonne, tableau) {
    if (ligne > 0 && ligne <= 3 && colonne > 0 && colonne <= 3) {
        return (tableau[ligne - 1][colonne - 1] === 0);
    }
}

function genererGrilleVide(countLine, countColumn){
    let array = [];
    for(let i = 0; i < countLine; i++) {
        let line = [];
        for(let j = 0; j < countColumn; j++) {
            line.push(0);
        }
        array.push(line);
    }
    return array;
}

function afficherGrille(tableau){
    
    divGridGame.innerHTML = "";

    let content = "<table>";
    
    for (let i = 0; i < tableau.length; i++) {
        content += "<tr>";
        for (let j = 0; j < tableau[i].length; j++) {
            content += `<td id="${i + 1}-${j + 1}" class="text-center border border-dark p-2" style="width:100px;height:100px"><h1>`;
            if (tableau[i][j] === 0){
                content += '';
            } else if (tableau[i][j] === 1){
                content += 'x';
            } else if (tableau[i][j] === 2){
                content += 'o';
            }
            content += "</h1></td>";
        }
        content += "</tr>";        
    }
    content += "</table>";
    divGridGame.innerHTML = content;
}

function initializationMorpion() {
    indexJoueur = 1;
    casesJouees = 0;
    morpion = genererGrilleVide(3, 3);
    afficherGrille(morpion);
    afficherTour();
    divInfo.classList.remove("alert-success"); 
    divInfo.classList.remove("alert-secondary");
    divGridGame.classList.remove("bg-light"); 
}

divRefresh.addEventListener("click", function () {
    initializationMorpion();
});