MOUNTAINS_NUM = 20;

setupUI(MOUNTAINS_NUM);

function setupUI(MOUNTAINS_NUM) {	
	row1 = document.createElement("div");
	ground = document.getElementById("ground")
	mountain_main = document.getElementById("mountain");

	main_w = window.innerHeight;

	mountain_main.style.width = `${main_w}px`;
	mountain_main.style.height = `${main_w}px`;

	row1.classList.add("row-1");
	document.body.appendChild(row1);

	for(var i = 0; i < MOUNTAINS_NUM; i++) {
		mountain = document.createElement("div");
		mountain.classList.add("mountain");
		mountain.classList.add(`mountain-${getRandomInt(1, 3)}`);
		row1.appendChild(mountain);

		$width = window.innerWidth / 5;
		mountain.style.left = `${i * (100 / MOUNTAINS_NUM) + getRandomInt(-5, 5)}%`;
		mountain.style.top = `${getRandomInt(0, 100)}%`;;
		mountain.style.width = `${$width}px`;
		mountain.style.height = `${$width}px`;
		mountain.style.transform = `rotate(45deg)`;
		h = $width * Math.pow(2, 0.5) / 2;
		ground.style.top = `calc(50% + ${h}px)`;
	}
}




function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}