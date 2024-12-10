const canvas = document.getElementById("maze");
const ctx = canvas.getContext("2d");

// Maze grid (15x15)
const maze = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
  [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 3],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const tileSize = canvas.width / maze[0].length;
let player = { x: 1, y: 1 }; // Start position
let gameOver = false; // Track if the game is over

function drawMaze() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let y = 0; y < maze.length; y++) {
    for (let x = 0; x < maze[y].length; x++) {
      if (maze[y][x] === 1) {
        ctx.fillStyle = "black"; // Wall
      } else if (maze[y][x] === 3) {
        ctx.fillStyle = "green"; // Exit
      } else {
        ctx.fillStyle = "white"; // Path
      }
      ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);

      if (maze[y][x] === 2) {
        ctx.fillStyle = "blue"; // Player
        ctx.beginPath();
        ctx.arc(
          x * tileSize + tileSize / 2,
          y * tileSize + tileSize / 2,
          tileSize / 3,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
    }
  }
}

function movePlayer(dx, dy) {
  if (gameOver) return; // Stop player movement after the game is over

  const newX = player.x + dx;
  const newY = player.y + dy;

  console.log(`Attempting move to: (${newX}, ${newY})`);

  if (maze[newY][newX] === 0 || maze[newY][newX] === 3) {
    maze[player.y][player.x] = 0; // Clear previous position
    player.x = newX;
    player.y = newY;
    maze[newY][newX] = 2; // Move player
    console.log(`Moved to: (${newX}, ${newY})`);
  }

  // Check if the player reached the specific coordinate (14, 13)
  if (newX === 14 && newY === 13) {
    console.log("Player reached the exit at (14, 13). GAME OVER!");
    gameOver = true; // Mark the game as over
    setTimeout(() => {
      window.location.href = "success.html"; // Redirect to success page
    }, 500); // Add a delay before redirection
  }

  drawMaze();
}

function handleKeyPress(e) {
  if (e.key === "w") movePlayer(0, -1); // Up
  if (e.key === "s") movePlayer(0, 1);  // Down
  if (e.key === "a") movePlayer(-1, 0); // Left
  if (e.key === "d") movePlayer(1, 0);  // Right
}

document.addEventListener("keydown", handleKeyPress);

drawMaze();
