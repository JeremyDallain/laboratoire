const divJour = document.querySelector("#jour");
const divDate = document.querySelector("#date");
const divTimer = document.querySelector("#timer");

jourDeLaSemaine();
dateDuJour();
HorlogeNumerique();

let jour = setInterval("jourDeLaSemaine()", 1000);
let date = setInterval("dateDuJour()", 1000);
let timer = setInterval("HorlogeNumerique()", 1000);

function jourDeLaSemaine(){
	let date = new Date();	
	let jourSemaine = date.getDay(); 
	switch (jourSemaine) {
		case 0 : jourSemaine = "Dimanche";
		break;
		case 1 : jourSemaine = "Lundi";
      break;
		case 2 : jourSemaine = "Mardi";
      break;
		case 3 : jourSemaine = "Mercredi";
      break;
		case 4 : jourSemaine = "Jeudi";
      break;
		case 5 : jourSemaine = "vendredi";
      break;
		case 6 : jourSemaine = "Samedi";
      break;
    	default: "none";
	}
	divJour.innerHTML = jourSemaine;
}

function dateDuJour(){
	let date = new Date();	
	// divDate.innerHTML = date.toLocaleDateString();
	
	let jour = date.getDate();
	if (jour === 1) {
		jour = "1er";
	}
	
	let mois = date.getMonth(); 
	switch (mois) {
		case 0 : mois = "Janvier";
		break;
		case 1 : mois = "Février";
      break;
		case 2 : mois = "Mars";
      break;
		case 3 : mois = "Avril";
      break;
		case 4 : mois = "Mai";
      break;
		case 5 : mois = "Juin";
      break;
		case 6 : mois = "Juillet";
      break;
		case 7 : mois = "Août";
      break;
		case 8 : mois = "Septembre";
      break;
		case 9 : mois = "Octobre";
      break;
		case 10 : mois = "Novembre";
      break;
		case 11 : mois = "Décembre";
      break;
    	default: "none";
	}
	let annee = date.getFullYear();
	
	divDate.innerHTML = `${jour} ${mois} ${annee}`;
}

function HorlogeNumerique() {
	let timer = new Date();
	divTimer.innerHTML = timer.toLocaleTimeString(); 
 }
 