const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  // panels.forEach((panel, i) => {
  //   if (panel.classList.contains("open")) this.classList.toggle("open");
  // });
  this.classList.toggle("open");
}

function toggleActive(e) {
  //property name can be flex or flex-grow depending on the browser
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
