const inputChoice = document.querySelector("#choice");
const divResultat = document.querySelector("#resultat");

let number;

inputChoice.addEventListener('change', function(e){
    number = parseInt(e.target.value);
});
