const secHand = document.querySelector("#sec-hand");
const minHand = document.querySelector("#min-hand");
const hourHand = document.querySelector("#hour-hand");

function setDate() {
  const now = new Date();
  const secondsDegrees =
    now.getSeconds() * 6 + 90; /* 9 = 360 /6 (degrees / seconds per minute) */
  const minDegrees = now.getMinutes() * 6 + 90;
  const hourDegrees =
    now.getHours() * 30 + 90; /* 30  = 360/12 (degrees / hours per half day) */
  secHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  console.log(now.getHours(), now.getMinutes(), now.getSeconds());
}

setInterval(setDate, 1000);
