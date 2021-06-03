const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0; //rewind audio if already playing
  audio.play();
  key.classList.add("playing");
};

//We need function() instead of  () => because function takes this from where it was called (this = key)
//and () => takes it from the scope (this=window)
function removeClassTransform(e) {
  if (e.propertyName !== "transform") return; //Multiple events are fired on each transition, only one is needed
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeClassTransform);
});

window.addEventListener("keydown", playSound);
