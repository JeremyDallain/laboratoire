const divGrille = document.querySelector("#grille");
const spanLecture = document.querySelector("#lecture");
// let grille = genererGrilleVide(5, 5, [0, 0]);


let startLife = null;
let ligne = 0;
let colonne = 0;
let vitesse = 0;


afficherGrille(grille, divGrille);

afficherLecture(spanLecture);

function afficherLecture(nomDiv){
  nomDiv.innerHTML = "lecture en ";
  if(startLife === null) {
    nomDiv.innerHTML += "pause";
  } else {
    nomDiv.innerHTML += "cours";
  }
  
}


//functions

function start(tableau, div){
  if (startLife === null) {    
    startLife = setInterval(function(){ 
		  afficherGrille(nouvelleEtape(tableau), div);
    }, 500);	
    afficherLecture(spanLecture);
  }
	
}

function stop() { 
  clearInterval(startLife);
  startLife = null;
  afficherLecture(spanLecture);
} 


function nouvelleEtape(tableau){
	tableau = compterVoisinsCellule(tableau);
	tableau = changerStatutCellule(tableau);
	return tableau;
}


function compterVoisinsCellule(tableau){
	for(let i = 0; i < tableau.length; i++){
		for(let j = 0; j < tableau[i].length; j++){
			//verifier qu'on est pas en dehors du tableau
			
			if (i !== 0 && j !== 0) {
				if (tableau[i-1][j-1][0] === 1) { 
					tableau[i][j][1]++ ;
				}			
			}			
			if (i !== 0) {
				if (tableau[i-1][j][0] === 1) { 
					tableau[i][j][1]++ ;
				}
			}			
			if (i !== 0 && j !== tableau[i].length - 1) {
				if (tableau[i-1][j+1][0] === 1) { 
					tableau[i][j][1]++ ;
				}
			}			
			if (j !== tableau[i].length - 1) {
				if (tableau[i][j+1][0] === 1) { 
					tableau[i][j][1]++ ;
				}
			}			
			if (i !== tableau.length - 1 && j !== tableau[i].length - 1) {
				if (tableau[i+1][j+1][0] === 1) { 
					tableau[i][j][1]++ ;
				}
			}			
			if (i !== tableau.length - 1) {
				if (tableau[i+1][j][0] === 1) { 
					tableau[i][j][1]++ ;
				}	
			}			
			if (i !== tableau.length - 1 && j !== 0) {
				if (tableau[i+1][j-1][0] === 1){ 
					tableau[i][j][1]++ ;
				}	
			}			
			if (j !== 0) {
				if (tableau[i][j-1][0] === 1) { 
					tableau[i][j][1]++ ;
				}
			}		
		}
	}
	return tableau;
}

//une cellule morte possédant exactement trois voisines vivantes devient vivante (elle naît) ;
//	une cellule vivante possédant deux ou trois voisines vivantes le reste, sinon elle meurt.
function changerStatutCellule(tableau){
	//boucle pour chaque case et appliquer les regles.
	for(let i = 0; i < tableau.length; i++){
		for(let j = 0; j < tableau[i].length; j++){	
			//si case vide (0)
			if (tableau[i][j][0] === 0){
				if (tableau[i][j][1] === 3){
					tableau[i][j][0] = 1;
					tableau[i][j][1] = 0;
				} else {
					tableau[i][j][1] = 0;
				}
			} else if (tableau[i][j][0] === 1){
				if (tableau[i][j][1] === 2 || tableau[i][j][1] === 3) {
					tableau[i][j][1] = 0;
				} else {
					tableau[i][j][0] = 0;
					tableau[i][j][1] = 0;
				}
			}
		}
	}
	return tableau;
}


function afficherGrille(tableau, nomDiv){
    
    nomDiv.innerHTML = "";

    let content = "<table>";
    
    for (let i = 0; i < tableau.length; i++) {
        content += "<tr>";
        for (let j = 0; j < tableau[i].length; j++) {
            content += `<td id="${i}-${j}">`;
            if (tableau[i][j][0] === 0){
                content += '';
            } else if (tableau[i][j][0] === 1){
                content += '⬤';
            } 
            content += "</td>";
        }
        content += "</tr>";        
    }
    content += "</table>";
    nomDiv.innerHTML = content;
}

function genererGrilleVide(nombreLignes, nombreColonnes, symbole){
	let tableau = [];
	for (let i = 0; i < nombreLignes; i++){
		let lignes = [];
		for (let j = 0; j < nombreColonnes; j++){
			lignes.push(symbole);
		}
		tableau.push(lignes);
	}
	return tableau;
}

divGrille.addEventListener("click", function(event){
    let idCellule = event.target.id;
    let coordonnees = idCellule.split('-'); //transformer en int
    ligne = parseInt(coordonnees[0]);
    colonne = parseInt(coordonnees[1]);
    if(grille[ligne][colonne][0] === 1){
		grille[ligne][colonne][0] = 0;
	} else {
		grille[ligne][colonne][0] = 1;
	}
	afficherGrille(grille, divGrille);
})