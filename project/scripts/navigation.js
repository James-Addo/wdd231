const navButton = document.querySelector('#nav-button');
const navBar = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});

const navLinks = document.querySelectorAll('.navigation li a');

navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.parentElement.classList.add('current');
    }
});