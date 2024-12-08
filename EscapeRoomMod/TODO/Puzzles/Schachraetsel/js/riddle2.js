const riddle2 = {
    title: "Schachmatt in einem Zug - Über die weiten Felder",
    initialSetup: [
        { square: 'e1', piece: 'K', color: 'white' },
        { square: 'a1', piece: 'R', color: 'white' },
        { square: 'f5', piece: 'N', color: 'white' },
        { square: 'e8', piece: 'k', color: 'black' },
        { square: 'f7', piece: 'p', color: 'black' },
        { square: 'g7', piece: 'p', color: 'black' },
        { square: 'd7', piece: 'p', color: 'black' },
        { square: 'h8', piece: 'r', color: 'black' }
    ],

    load: function() {
        this.currentSetup = structuredClone(this.initialSetup);
        createBoard(this.currentSetup);
        currentRiddle = 2;
        setRiddleTitle(this.title);
    },

    check: function() {
        const whiteRook = this.currentSetup.find(p => p.piece === 'R');
        const blackKing = this.currentSetup.find(p => p.piece === 'k');

        if (whiteRook && whiteRook.square === 'a8') {
            if (this.isCheckmate(blackKing)) {
                return true;
            }
        }
        return false;
    },

    isCheckmate: function(king) {
        const whiteRook = this.currentSetup.find(p => p.piece === 'R');
        const blackRook = this.currentSetup.find(p => p.piece === 'r');
        
        if (whiteRook && whiteRook.square === 'a8' && king.square === 'e8' && 
            (!blackRook || blackRook.square !== 'a8')) {
            return true; 
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


