const divEcran = document.querySelector("#ecran");
const divTouches = document.querySelector("#touches");

let chaineCalcul = "";
let resultat = 0;
let lestCharacter = "";

divTouches.addEventListener("click", function(event){
    let button = event.target.value;
    if (chaineCalcul.length >= 0) {
        lastCharacter = chaineCalcul.substring(chaineCalcul.length - 1);
    }    
    if (button === "CA") {
        chaineCalcul = "";
        divEcran.value = chaineCalcul;
    } else if (button === "C") {
        chaineCalcul = chaineCalcul.toString();
        chaineCalcul = chaineCalcul.substring(0, chaineCalcul.length - 1);
        divEcran.value = chaineCalcul;
    } else if (button === "=") {
        resultat = eval(chaineCalcul);
        if (isNaN(resultat)) {
            chaineCalcul = "error";
        } else {
            chaineCalcul += " = " + resultat;
            divEcran.value = chaineCalcul;
            chaineCalcul = resultat;
        }  
    } else if (button === "." || button === "+" || button === "-" || button === "*" || button === "/") {
        if (lastCharacter !== "+" && lastCharacter !== "-" && lastCharacter !== "*" && lastCharacter !== "/" && lastCharacter !== "."){
            chaineCalcul += "" + button;  
            divEcran.value = chaineCalcul; 
        } else {
            chaineCalcul += ""; 
        }             
    } else if (button === undefined) {
        chaineCalcul += "";      
    } else {
        if (chaineCalcul === resultat) {
            chaineCalcul = "";
        }
        chaineCalcul += "" + button;    
        divEcran.value = chaineCalcul;
    }    
    
});
