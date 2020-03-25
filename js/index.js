const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
  // "#215553",
  // "#4CAF77",
  // "#AA5430",
  // "#045668",
  // "#123456",
  // "#d78rjs",
  // "#22DRW3",
  // "#F00RTR",
  // "#2L7RI7",
  // "#102FOT",
  // "#RE23FD",
  // "#12D78F",
  // "#A1C7D0",
  // "#DPKBC1",
  // "#L4ER6S"
];


const body = document.querySelector("body");
const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');

let isActive = false;
let timer;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
  
  function start() {
  if (!isActive) {
        timer = setInterval(() => {
      body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
      isActive = true;
    }, 1000);
  };
}

function stop() {
  clearInterval(timer);
  isActive = false;
};


btnStart.addEventListener("click", start);
btnStop.addEventListener("click", stop);



