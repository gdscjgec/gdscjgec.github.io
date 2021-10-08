// Navbar Toogle for All Pages ******************************

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
    console.log('hello');
    navbarLinks.classList.toggle('active');
});

// Add Your Scripts Here:
// <Topic/Explain> ******************************
