// Utility function to log messages to the console
const logMessage = (message) => {
};

// Event listener for when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    initializeGame();
});

const boardElement = document.getElementById("board");
let currentRiddle = 1; 
let currentSetup = []; 

//Source of piece images
const pieceImages = {
    'K': 'images/white_king.png',
    'Q': 'images/white_queen.png',
    'R': 'images/white_rook.png',
    'B': 'images/white_bishop.png',
    'N': 'images/white_knight.png',
    'P': 'images/white_pawn.png',
    'k': 'images/black_king.png',
    'q': 'images/black_queen.png',
    'r': 'images/black_rook.png',
    'b': 'images/black_bishop.png',
    'n': 'images/black_knight.png',
    'p': 'images/black_pawn.png',
};

// Function to check if a move is valid for a given piece
const isValidMove = (piece, fromSquare, toSquare) => {
    const fromFile = fromSquare.charCodeAt(0);
    const fromRank = parseInt(fromSquare[1], 10);
    const toFile = toSquare.charCodeAt(0);
    const toRank = parseInt(toSquare[1], 10);

    const fileDiff = Math.abs(toFile - fromFile);
    const rankDiff = Math.abs(toRank - fromRank);

    switch (piece.piece) {
        case 'K': // König
            return (fileDiff <= 1 && rankDiff <= 1);
        case 'Q': // Dame
            return (fileDiff === rankDiff || fromFile === toFile || fromRank === toRank);
        case 'R': // Turm
            return (fromFile === toFile || fromRank === toRank);
        case 'B': // Läufer
            return (fileDiff === rankDiff);
        case 'N': // Springer
            return (fileDiff === 1 && rankDiff === 2) || (fileDiff === 2 && rankDiff === 1);
        default:
            return false;
    }
};

// Function to create and set up the chessboard
const createBoard = (setup) => {
    currentSetup = setup; 
    boardElement.innerHTML = ''; 
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const squareId = `${String.fromCharCode(97 + j)}${8 - i}`;
            const square = document.createElement("div");
            square.classList.add('square');
            square.setAttribute('id', squareId);

            if ((i + j) % 2 === 0) {
                square.classList.add('white');
            } else {
                square.classList.add('black');
            }

            boardElement.appendChild(square);
        }
    }

    setup.forEach(piece => {
        const square = document.getElementById(piece.square);
        if (square) {
            const pieceElement = document.createElement("img");
            pieceElement.src = pieceImages[piece.piece];
            pieceElement.classList.add('piece');
            pieceElement.setAttribute('draggable', piece.color === 'white');
            pieceElement.setAttribute('data-square', piece.square);
            pieceElement.addEventListener('dragstart', (e) => {
                if (piece.color !== 'white') {
                    e.preventDefault();
                    return;
                }
                e.dataTransfer.setData('text/plain', piece.square);
                pieceElement.classList.add('dragging');
            });
            pieceElement.addEventListener('dragend', () => {
                pieceElement.classList.remove('dragging');
            });
            square.appendChild(pieceElement);
        }
    });

    document.querySelectorAll('.square').forEach(square => {
        square.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
        square.addEventListener('drop', handleDrop);
    });
};

// Function to handle the dropping of a piece on a square
const handleDrop = (e) => {
    e.preventDefault();
    const fromSquareId = e.dataTransfer.getData('text/plain');
    const toSquareId = e.target.closest('.square').id;
    const pieceElement = document.querySelector(`[data-square="${fromSquareId}"]`);

    if (pieceElement) {
        const movingPiece = currentSetup.find(p => p.square === fromSquareId);
        const targetPiece = currentSetup.find(p => p.square === toSquareId);

        if (movingPiece && 
            isValidMove(movingPiece, fromSquareId, toSquareId) && 
            (!targetPiece || targetPiece.color !== movingPiece.color)) {

            const originalSquare = movingPiece.square;
            movingPiece.square = toSquareId;

            if (currentRiddle === 3 && movingPiece.piece === 'Q' && toSquareId === 'b3') {
                riddle3.updateSetup(fromSquareId, toSquareId);
                return;
            }

            const solved = checkSolution();

            if (solved) {
                if (targetPiece) {
                    currentSetup = currentSetup.filter(p => p !== targetPiece);
                    const capturedElement = document.querySelector(`[data-square="${toSquareId}"]`);
                    if (capturedElement) {
                        capturedElement.remove();
                    }
                }
                const targetSquare = document.getElementById(toSquareId);
                targetSquare.appendChild(pieceElement);
                pieceElement.setAttribute('data-square', toSquareId);
                hideMessage('message_wrong_move');
                handleSolvedRiddle();
            } else {
                movingPiece.square = originalSquare;
                const originalSquareElement = document.getElementById(originalSquare);
                originalSquareElement.appendChild(pieceElement);
                showWrongMoveMessage("Falscher Zug. Bitte versuche es nochmal.");
            }
        } else {
            const originalSquare = document.getElementById(fromSquareId);
            originalSquare.appendChild(pieceElement);
            showWrongMoveMessage("Ungültiger Zug. Bitte versuche es nochmal.");
        }
    }
};

// Function to check if the current riddle is solved
const checkSolution = () => {
    switch (currentRiddle) {
        case 1:
            return riddle1.check();
        case 2:
            return riddle2.check();
        case 3:
            return riddle3.check();
        default:
            return false;
    }
};

// Function to handle actions when a riddle is solved
const handleSolvedRiddle = () => {
    let message;
    switch (currentRiddle) {
        case 1:
            message = "Erstes Rätsel gelöst! Schwarzer König ist Schachmatt.";
            break;
        case 2:
            message = "Zweites Rätsel gelöst! Schwarzer König ist Schachmatt.";
            break;
        case 3:
            message = "Drittes Rätsel gelöst! Schwarzer König ist Schach.";
            break;
    }
    showSolvedMessage(message);
    if (currentRiddle < 3) {
        setTimeout(() => {
            loadNextRiddle();
        }, 2000);
    }
};

// Function to display a message when a riddle is solved
const showSolvedMessage = (text, duration = 2000) => {
    const messageElement = document.getElementById('message_solved');
    if (messageElement) {
        messageElement.textContent = text;
        messageElement.style.display = 'block';
        setTimeout(() => {
            hideMessage('message_solved');
        }, duration);
    } 
};

// Function to display a message for an invalid move
const showWrongMoveMessage = (text) => {
    const messageElement = document.getElementById('message_wrong_move');
    if (messageElement) {
        messageElement.textContent = text;
        messageElement.style.display = 'block';
        setTimeout(() => {
            hideMessage('message_wrong_move');
        }, 2000);
    }
};

// Function to hide a message element
const hideMessage = (elementId) => {
    const messageElement = document.getElementById(elementId);
    if (messageElement) {
        messageElement.style.display = 'none';
    } 
};

// Function to load the next riddle
const loadNextRiddle = () => {
    currentRiddle++;
    switch (currentRiddle) {
        case 2:
            riddle2.load();
            break;
        case 3:
            riddle3.load();
            break;    
        default:
            break;
    }
};

// Function to initialize the game
const initializeGame = () => {
    riddle1.load();
};

// Function to set the riddle title
const setRiddleTitle = (title) => {
    const titleElement = document.getElementById('riddle-title');
    if (titleElement) {
        titleElement.textContent = title;
    }
};

// Function to simulate black's move (currently just logs a message)
const makeBlackMove = () => {
};
