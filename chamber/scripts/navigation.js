const navButton = document.querySelector('#nav-button');
const navBar = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});

const currentUrl = window.location.pathname;
const navLinks = document.querySelectorAll('.navigation a');

navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');

    if ((linkHref === "" && currentUrl === "/") || currentUrl.endsWith(linkHref)) {
        link.parentElement.classList.add('active');
    }
});

