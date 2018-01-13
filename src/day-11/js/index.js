for (var wheelId of ["wheel-1", "wheel-2"]) {
  for (var i = 0; i < 10; i++) {
    bar = document.createElement("div");
    bar.classList.add("bar");
    document.getElementById(wheelId).appendChild(bar);
    bar.style.transform = `rotate(${i * 360 / 10}deg)`;
  }
}
OFF_NUM = 100;
WIN_WIDTH = window.innerWidth * 11;
for (var i = 0; i < OFF_NUM; i++) {
  if (i < OFF_NUM / 2) {
    drawOffice(i, OFF_NUM, WIN_WIDTH);
  } else {
    drawMountain(i, OFF_NUM, WIN_WIDTH);
  }
}

function drawOffice(i, OFF_NUM, WIN_WIDTH) {
  office = document.createElement("div");
  office.classList.add("office");
  office.classList.add(`office-${getRandomInt(1, 3)}`);
  document.getElementById("city").appendChild(office);
  width = window.innerWidth / 10 + getRandomInt(-10, 10);
  office.style.width = `${width}px`;
  office.style.left = `calc(${getRandomInt(-5, 5)}% + ${(i - 1) *
    WIN_WIDTH /
    OFF_NUM}px)`;
  height = getRandomInt(30, 90);
  office.style.height = `${height}%`;
}

function drawMountain(i, OFF_NUM, WIN_WIDTH) {
  mon = document.createElement("div");
  mon.classList.add("mountain");
  mon.classList.add(`mountain-${getRandomInt(1, 3)}`);
  document.getElementById("city").appendChild(mon);
  width = document.getElementById("city").offsetHeight;
  randW = width / getRandomInt(2, 10);
  mon.style.width = `${width - randW}px`;
  mon.style.height = `${width - randW}px`;
  mon.style.left = `calc(${getRandomInt(-5, 5)}% + ${(i - 1) *
    WIN_WIDTH /
    OFF_NUM}px)`;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}