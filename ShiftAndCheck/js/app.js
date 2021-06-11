const checkboxes = document.querySelectorAll(
  '#container input[type="checkbox"]'
);

function handleCheck(e) {
  // inBetween acts as a flag variable
  let inBetween = false;

  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      // flip inBetween variable at clicked and the last checkbox clicked
      // to create the borders of the checked boxes
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  //stores current checkbox for next iteration
  lastChecked = this;
}

let lastChecked;
checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
