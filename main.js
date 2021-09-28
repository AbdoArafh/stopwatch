const minute = document.getElementById("minute");
const second = document.getElementById("second");
const millie = document.getElementById("millie");
let start = Date.now();
let isPaused = false;
let lastUpdate = Date.now();
let time;

const fill = (el, val) => (el.textContent = val.toString().padStart(2, "0"));

const print = (m, s, ms) => {
  fill(minute, m);
  fill(second, s);
  fill(millie, ms);
};

const formatTime = time => {
  const m = Math.floor(time / 60 / 1000);
  const s = Math.floor(time / 1000) % 60;
  const ms = time % 60;
  return [m, s, ms];
};

const changeState = () => {
  isPaused = !isPaused;
};

document.body.onclick = changeState;

const animate = () => {
  requestAnimationFrame(animate);
  const now = Date.now();
  const dt = now - lastUpdate;
  lastUpdate = now;
  if (!isPaused) {
    time = now - start;
    const [m, s, ms] = formatTime(time);
    print(m, s, ms);
  } else start += dt;
};

animate();
