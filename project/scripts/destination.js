import { cities } from '../project-data/destinations.mjs';

const tourGrid = document.getElementById('destination-grid');
const modal = document.getElementById('modal-2');
const modalTitle = document.getElementById('modal-title');
const modalList = document.getElementById('modal-list');
const closeBtn = document.getElementById('close-modal-2');

function showAttractions(city) {
    modalTitle.textContent = city.name;
    modalList.innerHTML = '';

    city.attraction_list.forEach(attraction => {
        const listItem = document.createElement('li');
        listItem.textContent = attraction;
        modalList.appendChild(listItem);
    });

    modal.showModal();
}

cities.forEach(city => {
    const destinationCard = document.createElement('div');
    destinationCard.classList.add('destination-card');

    destinationCard.innerHTML = `
        <img src="${city.image}" alt="${city.name} loading="lazy"">
        <h3>${city.name}</h3>
        <p>${city.description}</p>
        <button class="attractions">View Attractions</button>
    `;

    destinationCard.querySelector('.attractions').addEventListener('click', () => {
        showAttractions(city);
    });

    tourGrid.appendChild(destinationCard);
});

closeBtn.addEventListener('click', () => {
    modal.close();
});
