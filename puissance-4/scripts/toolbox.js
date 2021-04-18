var toolbox = {
    
    /**
     * Permet d'initialiser une grille (tableau de tableau) en fonction d'un nombre de ligne et de colonne passés en paramètres
     * @param {Number} countLine 
     * @param {Number} countColumn 
     * @param {*} symbol 
     */
    generateGridEmpty : function(countLine, countColumn, symbol = ''){
        let array = [];
        for(let i = 0; i < countLine; i++) {
            let line = [];
            for(let j = 0; j < countColumn; j++) {
                line.push(symbol);
            }
            array.push(line);
        }
        return array;
    }
}
