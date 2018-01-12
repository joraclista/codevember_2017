
/*add comets*/
for (var i = 0; i < 100; i++) {
	var comet = document.createElement("comet");
	comet.classList.add("comet");
	document.body.appendChild(comet);
	comet.style.top = `${getRandomInt(-10, 90)}%`
	comet.style.left = `${getRandomInt(-10, 90)}%`
	comet.style. animation =  `comet linear ${getRandomInt(1, 30)}s ${getRandomInt(0, 30)}s infinite`
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}