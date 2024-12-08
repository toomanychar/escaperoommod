const riddle3 = {
    title: "Schach in zwei Zügen - Die Opferung der Dame",
    initialSetup: [
        { square: 'g4', piece: 'K', color: 'white' },
        { square: 'b5', piece: 'Q', color: 'white' },
        { square: 'd4', piece: 'N', color: 'white' },
        { square: 'e3', piece: 'P', color: 'white' },
        { square: 'f2', piece: 'P', color: 'white' },
        { square: 'g2', piece: 'P', color: 'white' },
        { square: 'a3', piece: 'k', color: 'black' },
        { square: 'e1', piece: 'q', color: 'black' },
        { square: 'd2', piece: 'n', color: 'black' },
        { square: 'b3', piece: 'p', color: 'black' },
    ],

    queenHasMoved: false,

    load: function() {
        this.currentSetup = structuredClone(this.initialSetup);
        createBoard(this.currentSetup);
        currentRiddle = 3;
        this.queenHasMoved = false;
        setRiddleTitle(this.title);
    },

    check: function() {
        const whiteKnight = this.currentSetup.find(p => p.piece === 'N');
        const whiteQueen = this.currentSetup.find(p => p.piece === 'Q');
        const blackKnight = this.currentSetup.find(p => p.piece === 'n');

        if (whiteQueen && whiteQueen.square === 'b3') {
            this.queenHasMoved = true;
            this.currentSetup = this.currentSetup.filter(p => !(p.piece === 'p' && p.square === 'b3'));
            if (blackKnight) {
                blackKnight.square = 'b3';
                this.currentSetup = this.currentSetup.filter(p => p !== whiteQueen);
            }
            createBoard(this.currentSetup);
        }

        if (whiteKnight && whiteKnight.square === 'c2' && this.queenHasMoved) {
            setTimeout(() => {
                showSolvedMessage("Herzlichen Glückwunsch! Du hast das gesamte Schachrätsel vollständig gelöst!", 5000);
            }, 2500);
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
            if (movingPiece.piece === 'N' && !this.queenHasMoved) {
                showWrongMoveMessage("Zuerst muss die Dame bewegt werden.");
                return;
            }

            this.currentSetup = this.currentSetup.filter(p => p.square !== toSquare);
            movingPiece.square = toSquare;
            hideMessage('message_wrong_move'); 

            // Special logic for white queen capturing pawn on b3
            if (movingPiece.piece === 'Q' && toSquare === 'b3') {
                const blackKnight = this.currentSetup.find(p => p.piece === 'n');
                if (blackKnight) {
                    this.currentSetup = this.currentSetup.filter(p => p !== movingPiece);
                    blackKnight.square = 'b3';
                }
            }
        }
        createBoard(this.currentSetup);
        this.check();
    }
};
