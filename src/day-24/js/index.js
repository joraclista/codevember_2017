  for(var i = 0; i < 20; i++) {
    heart = document.createElement("div");
    document.body.appendChild(heart);
    heart.classList.add("heart");
    heart.style.left = `${getRandomInt(0, 90)}%`;
    heart.style.top = `${getRandomInt(0, 90)}%`;
    heart.style.animation = `pulse 5s ${getRandomInt(0, 5)}s infinite`;
  }

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}