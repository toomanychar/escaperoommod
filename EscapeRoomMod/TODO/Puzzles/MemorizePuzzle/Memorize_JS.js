const grid = document.getElementById("grid");
const message = document.getElementById("message");

const tiles = [];
const pattern = [];
let userInput = [];
let currentIndex = 0;

// Create the 3x3 grid
for (let i = 0; i < 9; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.dataset.index = i;
    tile.addEventListener("click", handleTileClick);
    tiles.push(tile);
    grid.appendChild(tile);
}

function startGame() {
    pattern.length = 0;
    userInput.length = 0;
    currentIndex = 0;
    tiles.forEach(tile => tile.classList.remove("correct", "wrong"));

    showCountdown();
}

function showCountdown() {
    let countdown = 3;

    const interval = setInterval(() => {
        message.textContent = `Memorize the pattern (${countdown})`;
        countdown--;

        if (countdown < 0) {
            clearInterval(interval);
            message.textContent = "Memorize the pattern";
            generatePattern();
            showPattern();
        }
    }, 1000);
}

function generatePattern() {
    while (pattern.length < 6) {
        const randomIndex = Math.floor(Math.random() * 9);
        if (!pattern.includes(randomIndex)) {
            pattern.push(randomIndex);
        }
    }
}

function showPattern() {
    let delay = 0;
    pattern.forEach((index, i) => {
        setTimeout(() => {
            tiles[index].style.backgroundColor = "blue";
            setTimeout(() => {
                tiles[index].style.backgroundColor = "";
                if (i === pattern.length - 1) {
                    setTimeout(() => {
                        message.textContent = "Input the pattern";
                    }, 400);
                }
            }, 400);
        }, delay);
        delay += 800;
    });
}

function handleTileClick(e) {
    if (message.textContent !== "Input the pattern") return;

    const index = parseInt(e.target.dataset.index);

    if (index === pattern[currentIndex]) {
        e.target.classList.add("correct");
        userInput.push(index);
        currentIndex++;

        if (userInput.length === pattern.length) {
            message.textContent = "You got it right!";
            setTimeout(startGame, 2000);
        }
    } else {
        e.target.classList.add("wrong");
        message.textContent = "You got it wrong! Try again!";
        setTimeout(startGame, 2000);
    }
}

// Start the game
startGame();
