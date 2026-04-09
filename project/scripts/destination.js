import { cities } from '../project-data/destinations.mjs';

const tourGrid = document.getElementById('destination-grid');
const modal = document.getElementById('modal-2');
const modalTitle = document.getElementById('modal-title');
const modalList = document.getElementById('modal-list');
const closeBtn = document.getElementById('close-modal-2');

// 1. Define the function to handle showing the modal
function showAttractions(city) {
    modalTitle.textContent = city.name;
    modalList.innerHTML = ''; // Clear previous list

    city.attraction_list.forEach(attraction => {
        const listItem = document.createElement('li');
        listItem.textContent = attraction;
        modalList.appendChild(listItem);
    });

    modal.showModal();
}

// 2. Build the cards and attach listeners directly (as per image format)
cities.forEach(city => {
    const destinationCard = document.createElement('div');
    destinationCard.classList.add('destination-card');

    destinationCard.innerHTML = `
        <img src="${city.image}" alt="${city.name} loading="lazy"">
        <h3>${city.name}</h3>
        <p>${city.description}</p>
        <button class="attractions">View Attractions</button>
    `;

    // Attach listener inside the loop - no need for data-attributes
    destinationCard.querySelector('.attractions').addEventListener('click', () => {
        showAttractions(city);
    });

    tourGrid.appendChild(destinationCard);
});

// 3. Close modal logic
closeBtn.addEventListener('click', () => {
    modal.close();
});
