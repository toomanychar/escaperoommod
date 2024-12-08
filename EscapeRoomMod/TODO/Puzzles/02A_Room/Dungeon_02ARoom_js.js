let clicksLeft = 5;
let monster = null;
let animationFrameId = null;

function startGame() {
  // Hide the modal
  const modal = document.getElementById('modal');
  modal.style.display = 'none';

  // Show the monster and counter
  monster = document.getElementById('monster');
  monster.style.display = 'block';

  const counter = document.getElementById('counter');
  counter.style.display = 'block';

  // Start monster movement
  moveMonster();
}

function moveMonster() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  let x = Math.random() * (screenWidth - 100);
  let y = Math.random() * (screenHeight - 100);
  let speedX = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 6 + 2); // Ensure non-zero diagonal speed
  let speedY = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 6 + 2);

  function animate() {
    x += speedX;
    y += speedY;

    if (x <= 0 || x + 100 >= screenWidth) {
      speedX = -speedX; // Reverse direction on collision
    }
    if (y <= 0 || y + 100 >= screenHeight) {
      speedY = -speedY; // Reverse direction on collision
    }

    monster.style.left = `${x}px`;
    monster.style.top = `${y}px`;

    animationFrameId = requestAnimationFrame(animate);
  }

  animate();
}

function monsterClicked() {
  clicksLeft--;

  // Update the counter
  const counter = document.getElementById('counter');
  counter.textContent = `Clicks Left: ${clicksLeft}`;

  // Change speed and direction (diagonal only)
  const newSpeedX = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 6 + 2);
  const newSpeedY = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 6 + 2);

  cancelAnimationFrame(animationFrameId); // Stop current animation
  setTimeout(() => {
    moveMonsterWithNewSpeed(newSpeedX, newSpeedY);
  }, 10); // Short delay to apply new speed

  // Check if the monster is defeated
  if (clicksLeft === 0) {
    monster.style.display = 'none';
    counter.style.display = 'none';

    const arrows = document.getElementById('arrows');
    arrows.style.display = 'flex';
  }
}

function moveMonsterWithNewSpeed(newSpeedX, newSpeedY) {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  let x = parseFloat(monster.style.left || 0);
  let y = parseFloat(monster.style.top || 0);

  function animate() {
    x += newSpeedX;
    y += newSpeedY;

    if (x <= 0 || x + 100 >= screenWidth) {
      newSpeedX = -newSpeedX; // Reverse direction on collision
    }
    if (y <= 0 || y + 100 >= screenHeight) {
      newSpeedY = -newSpeedY; // Reverse direction on collision
    }

    monster.style.left = `${x}px`;
    monster.style.top = `${y}px`;

    animationFrameId = requestAnimationFrame(animate);
  }

  animate();
}

// Attach click event to the monster
document.addEventListener('DOMContentLoaded', () => {
  monster = document.getElementById('monster');
  monster.addEventListener('click', monsterClicked);
});

function redirectTo(page) {
    if (page === 'Dungeon_02ABonusRoom.html') {
      // Path to 02A Bonus Room folder
      window.location.href = '02A_BonusRoom/' + page; 
    } else if (page === 'Dungeon_03ARoom.html') {
      // Path to 03A Room (up one folder)
      window.location.href = '../03A_Room/' + page; 
    } else if (page === 'Dungeon_03BRoom.html') {
      // Path to 03B Room (up one folder)
      window.location.href = '../03B_Room/' + page; 
    } else {
      console.error('Invalid page specified:', page);
    }
  }
  
  