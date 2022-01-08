// Navbar Toogle for All Pages ******************************

let menuBtn = document.querySelector("button.menu_toggle");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
});

// Hide Navbar on Scroll ******************************

let navBar = document.querySelector("header");
let scrollPos = 0;

window.addEventListener("scroll", () => {
  let scrollPosNow = window.pageYOffset || document.pageYOffset;

  if (scrollPosNow > scrollPos) {
    navBar.style.transform = "translateY(-100%)";
  } else {
    navBar.style.transform = "translateY(0)";
  }

  scrollPos = scrollPosNow;
});

// Add Your Scripts Here:
// <Topic/Explain> ******************************
