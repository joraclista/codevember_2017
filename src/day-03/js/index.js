total = 100; 
left = -5;

while (total > 0) {
  width = getRandomInt(3, 10);

  createTree(left, width);
  left = left + width;
  total = total - width;
}

function createTree(left, width) {
  var garden = document.getElementById("garden");
  var tree = document.createElement("div");
  garden.appendChild(tree);
  tree.classList.add("tree");
  tree.classList.add(`tree-${getRandomInt(1, 20)}`);

  treeH = getRandomInt(50, 80);
  treeHpx = treeH * window.innerHeight / 100;
  treeWpx = 0.9 * treeHpx;
  treeW = treeWpx * 100 / window.innerWidth;
  tree.style.height = `${treeH}%`;
  tree.style.left = `${left}%`;
  tree.style.width = `${treeW}%`;


  for (var l = 1; l < 50; l++) {
    createLeaves(tree, getRandomInt(10, 90), getRandomInt(40, 100));
  }
}

function createLeaves(tree, left, bottom) {
  var leave = document.createElement("div");
  tree.appendChild(leave);
  addStyleClass(leave, "leave");
  addStyleClass(leave, `leave-${getRandomInt(1, 4)}`);
  addStyleClass(leave, `leave-fall-${getRandomInt(1, 100)}`);
  leave.style.left = `${left}%`;
  leave.style.bottom = `${bottom}%`;
  leave.style.transition = `all ease ${getRandomInt(10, 25)}s`;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function addStyleClass(div, styleClass) {
	div.classList.add(styleClass);
}

function removeStyleClass(div, styleClass) {
	div.classList.remove(styleClass);
}

var season = 0;
function changeSeason() {
   body = document.body; 
	
  switch (season) {
    case 0:
      removeStyleClass(body, "winter");
      removeStyleClass(body, "fall");
      addStyleClass(body, "spring"); 
      break;
    case 1:
      addStyleClass(body, "autumn"); 
      break;
    case 2:
      addStyleClass(body, "fall"); 
      break;
    case 3:
      removeStyleClass(body, "spring");
      removeStyleClass(body, "autumn");
      addStyleClass(body, "winter");
      season = -1;
      break;
  }
  season++;
}