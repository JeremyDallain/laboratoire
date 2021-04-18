function afficherChiffresRomains(number){
    divResultat.innerHTML = ConvertirEnChiffresRomains(number);
}

function ConvertirEnChiffresRomains(number) {
    
    if (isNaN(number) || number < 1 || number > 4999) {
        return 'Veuillez entrer un nombre entier compris entre 1 et 4999.';
    }
    
	let chaineChiffresRomains = "";	
	const correspondances = [
		[1000, "M"],
		[900, "CM"],
		[500, "D"],
		[400, "CD"],
		[100, "C"],
		[90, "XC"],
		[50, "L"],
		[40, "XL"],
		[10, "X"],
		[9, "IX"],
		[5, "V"],
		[4, "IV"],
		[1, "I"]
	];
	
	function extraireChiffreRomain(valeurLettre, lettres) {
		while (number >= valeurLettre) {
			number -= valeurLettre;
			chaineChiffresRomains += lettres;
		}
	}
	
	correspondances.forEach(correspondance => {
		extraireChiffreRomain(correspondance[0], correspondance[1]);
	})	

	return chaineChiffresRomains;

}
