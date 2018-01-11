setupUI();

function setupUI() {
  WIN_WIDTH = window.innerWidth;
  CLOUD_NUM = 30;
  for (var i = 0; i < CLOUD_NUM; i++) {
    drawCloud(i, CLOUD_NUM, WIN_WIDTH);
  }
  FISH_NUM = 70;
  for (var i = 0; i <= FISH_NUM; i++) {
    drawFish(i, FISH_NUM, WIN_WIDTH);
  }
  drawFish(i, FISH_NUM, WIN_WIDTH, 300);
}

function drawCloud(i, CLOUD_NUM, WIN_WIDTH) {
  cloud = document.createElement("div");
  cloud.classList.add("cloud");
  document.getElementById("sky").appendChild(cloud);
  c_left = i * WIN_WIDTH / CLOUD_NUM;
  c_top = getRandomInt(-20, 90);
  cloud.style.left = `${c_left}px`;
  cloud.style.top = `${c_top}%`;
  cloud.style.transform = `scale(${1 / getRandomInt(3, 8)})`;
}

function drawFish(i, CLOUD_NUM, WIN_WIDTH, width = 0) {
  fishContainer = document.createElement("div");
  fishContainer.classList.add("fish-container");
  fish = document.createElement("div");
  fish.classList.add("fish");
  fish.classList.add("fish-" + getRandomInt(1, 7));
  fishContainer.appendChild(fish);
  document.getElementById("ocean").appendChild(fishContainer);
  c_left = i * WIN_WIDTH / CLOUD_NUM;
  c_top = getRandomInt(5, 90);
  fishContainer.style.left = `-30%`;
  fishContainer.style.top = `${c_top}%`;
  fish.style.transform = `rotate(45deg) scale(${1 / getRandomInt(2, 6)}) `;

  eyes = document.createElement("div");
  eyes.classList.add("fish-eyes");
  fish.appendChild(eyes);

  tail = document.createElement("div");
  tail.classList.add("fish-tail");
  fish.appendChild(tail);

  fishContainer.style.animation = `swim ${getRandomInt(
    40,
    80
  )}s  ${getRandomInt(0, 80)}s infinite`;
  
  if (width > 0) {
    fish.style.transform = `rotate(45deg) scale(1.5) `;
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}