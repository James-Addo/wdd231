import { items } from '../data/items.mjs';

const visitorMessage = document.querySelector('.visitor-info');

const lastVisit = localStorage.getItem('lastVisit');
const currentDate = Date.now();
if (!lastVisit) {
    visitorMessage.textContent = 'Welcome! Let us know if you have any questions.';
} else {
    const daysDiff = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24));
    if (daysDiff < 1) {
        visitorMessage.textContent = 'Back so soon! Awesome!';
    } else if (daysDiff === 1) {
        visitorMessage.textContent = 'You last visited 1 day ago.';
    } else {
        visitorMessage.textContent = `You last visited ${daysDiff} days ago.`;
    }
}
localStorage.setItem('lastVisit', currentDate);


const gallery = document.querySelector('.picture-gallery');
const dialogBox = document.getElementById('dialogBox');
const closeButton = document.getElementById('closeButton');
const modalContent = document.querySelector('.modal');

items.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('cardDiv');
    card.innerHTML = `
    <h2>${item.name}</h2>
    <figure>
      <img src="${item.image}" alt="${item.name}">
    </figure>
    <address>${item.address}</address>
    <p>${item.description}</p>
    <button class="learn-more">Learn More</button>
  `;
    gallery.appendChild(card);

    const learnMoreButton = card.querySelector('.learn-more');
    learnMoreButton.addEventListener('click', () => {
        modalContent.innerHTML = `
      <h2>${item.name}</h2>
      <p id="history">${item.history}</p>
    `;
        dialogBox.showModal();
    });
});

closeButton.addEventListener('click', () => {
    dialogBox.close();
});