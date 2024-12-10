// Данные головоломки
const names = ["NeuroTech", "Visualix", "DigitAll", "SynthMind", "ObliTex"];
const items = [
  { name: "neuro", image: "Images/neuro.png" },
  { name: "visual", image: "Images/visual.png" },
  { name: "digitize", image: "Images/digitize.png" },
  { name: "synth", image: "Images/synth.png" },
  { name: "oblivion", image: "Images/oblivion.png" },
];
// yellow blue green metal lila
// Функция для перемешивания массива
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Инициализация барабанов
function initializeNameWheel(id, options) {
  const wheel = document.getElementById(id);
  let currentIndex = 0;

  const updateWheel = () => {
    wheel.textContent = options[currentIndex];
  };

  wheel.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % options.length;
    updateWheel();
  });

  shuffle(options); // Перемешиваем элементы при загрузке
  updateWheel();
}

function initializeItemWheel(id, imageId, options) {
  const wheel = document.getElementById(id);
  const img = document.getElementById(imageId);
  let currentIndex = 0;

  const updateWheel = () => {
    img.src = options[currentIndex].image;
    img.alt = options[currentIndex].name;
  };

  wheel.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % options.length;
    updateWheel();
  });

  shuffle(options);
  updateWheel();
}

// Инициализация всех колес
names.forEach((_, index) => {
  initializeNameWheel(`name-wheel-${index + 1}`, [...names]);
  initializeItemWheel(
    `item-wheel-${index + 1}`,
    `item-image-${index + 1}`,
    [...items]
  );
});

// Проверка решения
document.getElementById("check-solution").addEventListener("click", () => {
  const solution = [];
  for (let i = 1; i <= 5; i++) {
    const name = document.getElementById(`name-wheel-${i}`).textContent;
    const item = document.getElementById(`item-image-${i}`).alt;
    solution.push({ name, item });
  }

  // Пример проверки (обновите под свои условия)
  const isCorrect = solution.every(
    (pair, index) => names[index] === pair.name && items[index].name === pair.item
  );

  document.getElementById("result").textContent = isCorrect
    ? "Richtige Lösung!"
    : "Falsche Lösung. Versuchen es noch Mal.";
});
