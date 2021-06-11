const secHand = document.querySelector("#sec-hand");
const minHand = document.querySelector("#min-hand");
const hourHand = document.querySelector("#hour-hand");

function rotate(ele, deg) {
  ele.style.transform = `rotate(${deg + 90}deg)`;
}

function setDate() {
  const now = new Date();
  const secondsDegrees =
    now.getSeconds() * 6; /* 6 = 360 /60 (degrees / seconds per minute) */
  const minDegrees = now.getMinutes() * 6;
  const hourDegrees =
    now.getHours() * 30; /* 30  = 360/12 (degrees / hours per half day) */
  rotate(secHand, secondsDegrees);
  rotate(minHand, minDegrees);
  rotate(hourHand, hourDegrees);
}

setInterval(setDate, 1000);
