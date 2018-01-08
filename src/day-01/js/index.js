setupUI();

function stars(NUM_OF_STARS) {
  /*add stars*/
  for (var i = 0; i < NUM_OF_STARS; i++) {
    var star = document.createElement("div");
    star.classList.add("star");
    star.classList.add(`star-${getRandomInt(1,4)}`);
    star.style.zIndex = getRandomInt(100, 110);
    star.style.opacity = 1 / getRandomInt(1, 10);
    var size = getRandomInt(1, 5);
    
    document.getElementById("container").appendChild(star);
    var star_left = getRandomInt(0, 100);
    var star_top = getRandomInt(0, 100);
    star.style.left = `${star_left}%`;
    star.style.top = `${star_top}%`;

    var centerX = window.innerWidth / 2;
    var centerY = window.innerHeight / 2;

    var starX = star.offsetLeft;
    var starY = star.offsetTop;

    var cross = getCross(centerX, centerY, starX, starY);

    var velocity = getRandomInt(5, 30);
    star.style.transition = `all ease-in-out  ${velocity}s`;
    star.classList.add("start");
    star.style.transform = `translate3d(${cross.x - starX}px, ${cross.y -
      starY}px, 2000px)`;    
    
    removeDiv(star, velocity * 1000);
  }
}

function removeDiv(div, timeout) {
  return setTimeout(function() {
    document.getElementById("container").removeChild(div);
  }, timeout);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getK(x0, y0, x1, y1) {
  return (y1 - y0) / (x1 - x0);
}

function getR(x0, y0) {
  return Math.sqrt(Math.pow(x0, 2) + Math.pow(y0, 2));
}

function getDistance(x0, y0, x1, y1) {
  return Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
}

function getCross(x0, y0, x1, y1) {
  var K = getK(x0, y0, x1, y1);
  //console.log("K= " + K);
  var R = getR(x0, y0);
  // console.log("R= " + R);
  var point = {};
  var cross = {};
  point.x1 = x0 + Math.sqrt(Math.pow(R, 2) / (1 + Math.pow(K, 2)));
  point.x2 = x0 - Math.sqrt(Math.pow(R, 2) / (1 + Math.pow(K, 2)));

  point.y1 = y0 + K * (point.x1 - x0);
  point.y2 = y0 + K * (point.x2 - x0);

  d1 = getDistance(point.x1, point.y1, x1, y1);
  d2 = getDistance(point.x2, point.y2, x1, y1);
  cross.x = d1 < d2 ? point.x1 : point.x2;
  cross.y = d1 < d2 ? point.y1 : point.y2;
  return cross;
}

function setupUI() {
  var NUM_OF_STARS = 200;
  stars(NUM_OF_STARS);
  setInterval(function() {
    stars(NUM_OF_STARS);
  }, 5000);
}