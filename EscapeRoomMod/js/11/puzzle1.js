const puzzleSize = 3;
const tileSize = 100; // Size of each tile
const imageSize = 300; // Size of the entire image (3 tiles of 100px each side)
const imagePath = 'images/11/riddle/riddle1.png'; // Path to your puzzle image

const puzzleContainer = document.getElementById('puzzle');
let tiles = [];
let emptyTileIndex = puzzleSize * puzzleSize - 1;

// Initialisierung des Puzzles
function initializePuzzle() {
	tiles = [];
	for (let i = 1; i <= puzzleSize * puzzleSize - 1; i++) {
		tiles.push(i);
	}
	tiles.push(null); // Das leere Feld ist 'null'
}

// Zufälliges Mischen der Kacheln, bis eine lösbare Konfiguration gefunden wurde
function shufflePuzzle() {
	let solvable = false;
	while (!solvable) {
		// Mischen der Kacheln
		for (let i = tiles.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[tiles[i], tiles[j]] = [tiles[j], tiles[i]];
		}
		// Überprüfen, ob das Puzzle lösbar ist
		solvable = isSolvable(tiles);
	}
}

// Überprüfen, ob das Puzzle lösbar ist
function isSolvable(tiles) {
	let inversions = 0;
	const flattenedTiles = tiles.filter(t => t !== null); // Leeres Feld herausfiltern
	for (let i = 0; i < flattenedTiles.length; i++) {
		for (let j = i + 1; j < flattenedTiles.length; j++) {
			if (flattenedTiles[i] > flattenedTiles[j]) {
				inversions++;
			}
		}
	}
	return inversions % 2 === 0; // Even number of inversions means solvable
}

// Puzzle rendern
function renderPuzzle() {
	puzzleContainer.innerHTML = '';
	tiles.forEach((tile, index) => {
		const tileElement = document.createElement('div');
		tileElement.classList.add('tile');
		if (tile === null) {
			tileElement.classList.add('empty');
		} else {
			// Calculate the background position based on the tile number
			const x = ((tile - 1) % puzzleSize) * tileSize;
			const y = Math.floor((tile - 1) / puzzleSize) * tileSize;
			tileElement.style.backgroundImage = `url('${imagePath}')`;
			tileElement.style.backgroundPosition = `-${x}px -${y}px`;

			// Add the number to the tile
			const numberElement = document.createElement('div');
			numberElement.classList.add('number');
			numberElement.textContent = tile;
			tileElement.appendChild(numberElement);

			tileElement.addEventListener('click', () => handleTileClick(index));
		}
		puzzleContainer.appendChild(tileElement);
	});
}

// Kachel anklicken
function handleTileClick(index) {
	const emptyIndex = tiles.indexOf(null);
	const validMoves = [
		emptyIndex - 1, emptyIndex + 1, emptyIndex - puzzleSize, emptyIndex + puzzleSize
	];

	if (validMoves.includes(index)) {
		tiles[emptyIndex] = tiles[index];
		tiles[index] = null;
		renderPuzzle();
		checkWin();
	}
}

// Überprüfen, ob das Puzzle gelöst wurde
function checkWin() {
	if (getFlag("11_l" == "1")) {
		return;
	}
	for (let i = 0; i < tiles.length - 1; i++) {
		if (tiles[i] !== i + 1) {
			return;
		}
	}
	alert('Herzlichen Glückwunsch, Sie haben das Puzzle gelöst!');
	setFlag("11_l", 1)
}

// Puzzle initialisieren
initializePuzzle();
if (getFlag("11_l") == "1") {
	document.getElementById("text").innerHTML = "Dieses Puzzle habe ich schon gelöst."
} else {
	shufflePuzzle();
}
renderPuzzle();

