setupUI();

function setupUI() {
  city = document.getElementById("city")

  bridge = document.createElement("div");
  city.appendChild(bridge);
  bridge.classList.add("bridge")


  //Adding bridge bars
  for(var left = 0; left < window.innerWidth; ) {
    bar = document.createElement("div");
    bridge.appendChild(bar);
    bar.classList.add("bar");
    bar.style.left = `${left}px`;
    bar.style.width = "2px";
    left += 10;
  }

  //Adding bridge lights
  numOfLights = 10;
  for(var i = 0; i < numOfLights; i++) {
    light = document.createElement("div");
    bridge.appendChild(light);
    light.classList.add("light");
    light.style.left = `${i * 100/numOfLights}%`;
  }

  //Adding rain drops
  numOfDrops = 200;
  for(var i = 0; i < numOfDrops; i++) {
    drop = document.createElement("div");
    document.body.appendChild(drop);
    drop.classList.add("drop");
    drop.style.left = `${i * 100/numOfDrops}%`;
     drop.style.animation=`fall 1s ${getRandomInt(0, 1500)}ms forwards infinite`
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}