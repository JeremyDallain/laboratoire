let game = {
    gridPuissance4 : [],
    countColumn : 7,
    countLine : 6,

    
    initialization (){
        this.gridPuissance4 = toolbox.generateGridEmpty(this.countLine, this.countColumn, 0);
    },    

    /**
     * Permet d'afficher un tableau de puissance 4
     */
    showPuissance4 (){
        const divGame = document.querySelector("#game");
        divGame.innerHTML = "";

        let content = "<table class='text-center'>";
        content += "<tr>";
        // a factoriser
            content += '<td><button type="button" class="btn btn-outline-secondary" onClick="play(1)">▼</button></td>';
            content += '<td><button type="button" class="btn btn-outline-secondary" onClick="play(2)">▼</button></td>';
            content += '<td><button type="button" class="btn btn-outline-secondary" onClick="play(3)">▼</button></td>';
            content += '<td><button type="button" class="btn btn-outline-secondary" onClick="play(4)">▼</button></td>';
            content += '<td><button type="button" class="btn btn-outline-secondary" onClick="play(5)">▼</button></td>';
            content += '<td><button type="button" class="btn btn-outline-secondary" onClick="play(6)">▼</button></td>';
            content += '<td><button type="button" class="btn btn-outline-secondary" onClick="play(7)">▼</button></td>';
        content += "</tr>";
        for (i = 0; i < this.countLine; i++){
            content += "<tr>";            
            for (j = 0; j < this.countColumn; j++){
                let background = "";
                if (this.gridPuissance4[i][j] === 0) {
                    background += "";
                } else if (this.gridPuissance4[i][j] === 1) {
                    background += "bg-danger rounded-circle";
                } else if (this.gridPuissance4[i][j] === 2) {
                    background += "bg-primary rounded-circle";
                }
                content += `<td class="${background} text-center border" style="width:50px;height:50px">`;
                
                content += "</td>";
            }
            content += "</tr>";
        }
        content += "</table>";
        divGame.innerHTML = content;
    },

    playColumn (playerNumber, lineEmpty, column){
        this.gridPuissance4[lineEmpty][column - 1] = playerNumber;
    },

    /**
     * Fonction permettant de retourner la première ligne vide d'une colonne
     * @param {Number} column retourne -1 si la colonne est pleine
     */
    returnFirstEmptylineOnColumn (column){
        for (let i = this.countLine - 1; i >= 0; i--) {
            if (this.isEmptyLine(i, column)) {
            return i;
            }            
        }
        return -1;
    },

    /**
     * Fonction permettant de retourner si une cellule est vide (retourne true / false)
     * @param {Number} line 
     * @param {Number} column 
     */
    isEmptyLine (line, column){
        return this.gridPuissance4[line][column - 1] === 0;
    },

    /**
     * Fonction permettant de vérifier si un joueur a gagné
     * @param {Number} playerNumber 
     */
    checkEndGame (playerNumber){
        if(this.checkLineEndGame(playerNumber) || this.checkColumnEndGame(playerNumber) || this.checkDiagonalEndGame(playerNumber)){
            return true;
        }
        return false;
    },

    /**
     * Fonction permettant de vérifier si un joueur a gagné sur une ligne
     * @param {Number} playerNumber 
     */
    checkLineEndGame (playerNumber) {
        for(let i = this.countLine -1; i >= 0; i--) {
            for (let j = 0; j < this.countColumn - 3; j++) {
                if( this.gridPuissance4[i][j] === playerNumber &&
                    this.gridPuissance4[i][j + 1] === playerNumber &&
                    this.gridPuissance4[i][j + 2] === playerNumber &&
                    this.gridPuissance4[i][j + 3] === playerNumber
                    ) {
                    return true;
                }
            }
        }
        return false;
    },

    /**
     * Fonction permettant de vérifier si un joueur a gagné en colonne
     * @param {Number} playerNumber 
     */
    checkColumnEndGame (playerNumber){
        for(let i = 0; i < this.countColumn; i++) {
            for(let j = this.countLine-4; j >= 0; j--) {
                if( this.gridPuissance4[j][i] === playerNumber &&
                    this.gridPuissance4[j + 1][i] === playerNumber &&
                    this.gridPuissance4[j + 2][i] === playerNumber &&
                    this.gridPuissance4[j + 3][i] === playerNumber
                    ) return true;
            }
        }
    },

    /**
     * Fonction permettant de vérifier si un joueur a gagné en diagonale
     * @param {Number} playerNumber 
     */
    checkDiagonalEndGame (playerNumber){
        for(let i = this.countLine - 1; i >= 3; i--) {
            for (let j = 0; j < this.countColumn; j++) {
                if( this.gridPuissance4[i][j] === playerNumber &&
                    this.gridPuissance4[i - 1][j + 1] === playerNumber &&
                    this.gridPuissance4[i - 2][j + 2] === playerNumber &&
                    this.gridPuissance4[i - 3][j + 3] === playerNumber
                    ) return true;
                if( this.gridPuissance4[i][j] === playerNumber &&
                    this.gridPuissance4[i - 1][j - 1] === playerNumber &&
                    this.gridPuissance4[i - 2][j - 2] === playerNumber &&
                    this.gridPuissance4[i - 3][j - 3] === playerNumber
                    ) return true;
            }
        }
        return false;
    }
}
