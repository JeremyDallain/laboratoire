//Recommandation orthographique de 1990

function afficherLettres(number){
    divResultat.innerHTML = convertToLetter(number);
}

function convertToLetter(number){
    if (isNaN(number) || number < 0 || number > 999999999999) {
        return 'Veuillez entrer un nombre entier compris entre 0 et 999 999 999 999.';
    }
	return convertBillionsToLetter(number) +
			(convertBillionsToLetter(number) && convertMillionsToLetter(number) ? '-' : '') +
			convertMillionsToLetter(number) + 
			(convertMillionsToLetter(number) && convertThousandsToLetter(number) ? '-' : '') + 
			convertThousandsToLetter(number) + 
			(convertThousandsToLetter(number) && convertHundredsToLetter(number) ? '-' : '') + 						convertHundredsToLetter(number);
}

function convertBillionsToLetter(number) {
	let billions = ((number - number % 1000000000) / 1000000000) - ((number - number % 1000000000000) / 1000000000);
	console.log(billions)
	let billionsToLetter = convertHundredsToLetter(billions);
	if (billions > 0) {
		if (billions === 1){
			return billionsToLetter + "-milliard";
		} else {
			return billionsToLetter + "-milliards";
		}
	} else {
		return '';
	}	
}

function convertMillionsToLetter(number) {
	let millions = ((number - number % 1000000) / 1000000) - ((number - number % 1000000000) / 1000000);
	let millionsToLetter = convertHundredsToLetter(millions);
	if (millions > 0) {
		if (millions === 1){
			return millionsToLetter + "-million";
		} else {
			return millionsToLetter + "-millions";
		}
	} else {
		return '';
	}	
}

function convertThousandsToLetter(number) {
	let thousands = ((number - number % 1000) / 1000) - ((number - number % 1000000) / 1000);
	let thousandsToLetter = convertHundredsToLetter(thousands);
	if (thousands > 0) {
		if (thousands === 1) {
			return 'mille';
		} else {
			return thousandsToLetter + '-mille';
		}
	} else {
		return '';
	}	
}

function convertHundredsToLetter(number) {

    let unitsArray = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'];
    let tensArray = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante', 'quatre-vingt', 'quatre-vingt'];

    let units = number % 10;
    let tens = (number % 100 - units) / 10;
    let hundreds = (number % 1000 - number % 100) / 100;

    let unitsToLetter;
    let tensToLetter;
    let hundredsToLetter;


    if (number === 0) {
        return 'zéro';
    } else {
        // -----------------Traitement des unités--------------------
        
        unitsToLetter = (units === 1 && tens > 0 && tens !== 8 ? 'et-' : '') + unitsArray[units]; //exemple "trente-et-un"

        // -----------------Traitement des dizaines-----------------------------

        if (tens === 1 && units > 0) {
            tensToLetter = unitsArray[10 + units];  // onze, douze....
            unitsToLetter = ''; // on vide la chaine d'unité, ("dix-un" et remplacé par "onze")            
        } else if (tens === 7 || tens === 9) {
            tensToLetter = tensArray[tens] + '-' + (tens === 7 && units === 1 ? 'et-' : '') + unitsArray[10 + units]; // pour gerer soixante-dix, quatre-vingt-dix
            unitsToLetter = '';
        } else {
            tensToLetter = tensArray[tens];
        }
        tensToLetter += (units === 0 && tens === 8 ? 's' : ''); // quatre-vingts

        // --------------------------- Traitement des centaines -------------------------

        hundredsToLetter = (hundreds > 1 ? unitsArray[hundreds] + '-' : '') + (hundreds > 0 ? 'cent' : '') + (hundreds > 1 && tens == 0 && units == 0 ? 's' : '');

        // ----------------traitement des milliers--------------------



        // ---------------Retour du total-------------------------

        return hundredsToLetter + (hundredsToLetter && tensToLetter ? '-' : '') + tensToLetter + (hundredsToLetter && unitsToLetter || tensToLetter && unitsToLetter ? '-' : '') + unitsToLetter;
    }
}
