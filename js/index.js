// Reveal Animation & Button Hover for Index Page ******************************

window.addEventListener("load", () => {
  let banner = document.querySelector("div.banner");
  let colors = ["#f74037", "#4a90f4", "#14b25f", "#ffb808"];
  let startBtn = document.querySelector("a.btn_start");

  setTimeout(() => {
    banner.classList.add("loaded");
  }, 1000);

  startBtn.addEventListener("mouseenter", () => {
    startBtn.style.background = colors[(Math.random() * colors.length) | 0];
  });
});

// Add Your Scripts in [script.js] not here.
// If your scripts doesn't work there create your own file.
// End ******************************
