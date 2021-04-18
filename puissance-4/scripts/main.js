const divInfo = document.querySelector("#info");
const divRefresh = document.querySelector("#refresh");

let playerNumber = 1;
let isGameOver = false;

//START
game.initialization();
game.showPuissance4();
divInfo.innerHTML = "Tour du Joueur 1";


// play onClick
function play(column) {
    if(!isGameOver){
        
        let lineEmpty = game.returnFirstEmptylineOnColumn(column);
        if (lineEmpty !== -1) {
            game.playColumn(playerNumber, lineEmpty, column);
            game.showPuissance4();
            if(game.checkEndGame(playerNumber)){
                gameOver();
            } else {
                if (playerNumber === 1) {
                    playerNumber = 2;
                    divInfo.innerHTML = "Tour du Joueur 2";
                    divInfo.classList.replace("text-danger", "text-primary");
                } else {
                    playerNumber = 1;
                    divInfo.innerHTML = "Tour du Joueur 1";
                    divInfo.classList.replace("text-primary", "text-danger");
                }
            }     
        }
    }   
}

function gameOver(){
    isGameOver = true;
    divInfo.innerHTML = "Joueur " + playerNumber + " a gagné !";
    divInfo.classList.remove("alert-light");
    if (playerNumber === 1) {
        divInfo.classList.add("alert-danger");
    } else {
        divInfo.classList.add("alert-primary");
    }    
}

function refresh() {
    game.initialization();
    game.showPuissance4();
    divInfo.innerHTML = "Tour du Joueur 1";
    divInfo.classList.replace("text-primary", "text-danger");
    isGameOver = false;
    playerNumber = 1;
    divInfo.classList.remove("alert-danger");
    divInfo.classList.remove("alert-primary");
    divInfo.classList.add("alert-light");
}

divRefresh.addEventListener("click", function () {
    refresh();
});
