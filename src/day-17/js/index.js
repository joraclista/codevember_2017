setupUI();

function setupUI() {
    x = 0
	body = document.body; 
	addStyleClass(body, "jump"); 

	setInterval(function() {
	  x = (x + 1) % 4;
	   switch (x) {
		 case 0 : addStyleClass(body, "jump"); break;
		 case 1 : removeStyleClass(body, "jump"); addStyleClass(body, "velocity"); break;
		 case 2 : removeStyleClass(body, "velocity"); addStyleClass(body, "hit"); break;   
		 case 3 : removeStyleClass(body, "hit"); break;
	   }  
	}, 5000);



	CLOUD_NUM = 50;
	WIN_HEIGHT = 10 * window.innerHeight;
	for (var i = 0; i < CLOUD_NUM; i++) {
	  drawCloud(i, CLOUD_NUM, WIN_HEIGHT);
	}
}


function drawCloud(i, CLOUD_NUM, WIN_HEIGHT) {
	cloud = document.createElement("div");
	addStyleClass(cloud, "cloud");
	document.getElementById("sky").appendChild(cloud);
	c_btm = i * WIN_HEIGHT / CLOUD_NUM;
	cloud.style.bottom = `${c_btm}px`;
	c_left = getRandomInt(-20, 90);
	cloud.style.left = `${c_left}%`;
	cloud.style.transform = `scale(${1/getRandomInt(1, 8)})`;
}

function addStyleClass(div, styleClass) {
	div.classList.add(styleClass);
}

function removeStyleClass(div, styleClass) {
	div.classList.remove(styleClass);
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}