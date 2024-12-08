const riddle1 = {
    title: "Schachmatt in einem Zug - Die Dominanz der Dame",
    initialSetup: [
        { square: 'e1', piece: 'K', color: 'white' },
        { square: 'e2', piece: 'Q', color: 'white' },
        { square: 'd1', piece: 'R', color: 'white' },
        { square: 'h6', piece: 'B', color: 'white' },
        { square: 'e8', piece: 'k', color: 'black' },
        { square: 'e7', piece: 'p', color: 'black' },
    ],

    load: function() {
        this.currentSetup = structuredClone(this.initialSetup);
        createBoard(this.currentSetup);
        currentRiddle = 1;
        setRiddleTitle(this.title);
    },

    check: function() {
        const blackKing = this.currentSetup.find(p => p.piece === 'k');
        const whiteQueen = this.currentSetup.find(p => p.piece === 'Q');


        if (blackKing && whiteQueen) {
            const kingPos = blackKing.square;
            const queenPos = whiteQueen.square;

            if (kingPos === 'e8' && queenPos === 'h5') {
                return true;
            }
        }
        return false;
    },

    reset: function() {
        this.load();
    },

    updateSetup: function(fromSquare, toSquare) {
        const movingPiece = this.currentSetup.find(p => p.square === fromSquare);
        if (movingPiece) {
            this.currentSetup = this.currentSetup.filter(p => p.square !== toSquare);
            movingPiece.square = toSquare;
        }
        createBoard(this.currentSetup);
        this.check(); 
    }
};
