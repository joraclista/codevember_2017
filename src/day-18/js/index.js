setupUI();

function setupUI() {
	for (var wheelId of ["wheel-1", "wheel-2"]) {
	  for (var i = 0; i < 10; i++) {
		bar = document.createElement("div");
		bar.classList.add("bar");
		document.getElementById(wheelId).appendChild(bar);
		bar.style.transform = `rotate(${i * 360 / 10}deg)`;
	  }
	}

	WIN_WIDTH = window.innerWidth * 11;
	CLOUD_NUM = 250;
	for (var i = 0; i < CLOUD_NUM; i++) {
	  drawCloud(i, CLOUD_NUM, WIN_WIDTH);
	}

	OFF_NUM = 100;

	for (var i = 0; i < OFF_NUM; i++) {
	  drawPalmTree(i, OFF_NUM, WIN_WIDTH);
	}
}

function drawPalmTree(i, OFF_NUM, WIN_WIDTH) {
  palm = document.createElement("div");
  palm.classList.add("palm");
  palm.classList.add(`palm-${getRandomInt(1, 3)}`);
  document.getElementById("city").appendChild(palm);

  randH = getRandomInt(30, 90);
  palm.style.height = `${randH}%`;
  palm.style.left = `calc(${getRandomInt(-5, 5)}% + ${(i - 1) *
    WIN_WIDTH /
    OFF_NUM}px)`;

  for (angle of [/*50,*/ 20, -20, -50]) {
    leave1 = document.createElement("div");
    leave1.classList.add("palm-leave1");
    palm.appendChild(leave1);
    leave1.style.transform = `rotate(${angle}deg)`;
    leave2 = document.createElement("div");
    leave2.classList.add("palm-leave2");
    palm.appendChild(leave2);
    leave2.style.transform = `rotate(${angle}deg)`;
  }
}

function drawCloud(i, CLOUD_NUM, WIN_WIDTH) {
  cloud = document.createElement("div");
  cloud.classList.add("cloud");
  document.getElementById("city").appendChild(cloud);
  c_left = i * WIN_WIDTH / CLOUD_NUM;
  c_top = getRandomInt(-20, 90);
  cloud.style.left = `${c_left}px`;
  cloud.style.top = `${c_top}%`;
  cloud.style.transform = `scale(${1 / getRandomInt(2, 8)})`;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}