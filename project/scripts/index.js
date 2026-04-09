const tourContainer = document.getElementById('tour-container');
const dialogBox = document.getElementById('dialogBox');
const closeButton = document.getElementById('closeButton');

async function fetchTours() {
    try {
        const response = await fetch('./project-data/tours.json');
        const tours = await response.json();

        const randomTours = getRandomTours(tours, 4);

        randomTours.forEach((tour) => {
            const tourCard = document.createElement('div');
            tourCard.classList.add('tour-card');
            tourCard.innerHTML = `
        <h2>${tour.tour_name}</h2>
        <figure>
          <img src="${tour.image_url}" alt="${tour.tour_name}" loading="lazy">
        </figure>
        <address>${tour.location}</address>
        <p>${tour.description}</p>
        <button class="view-highlights">View Highlights</button>`;

            tourCard.querySelector('.view-highlights').addEventListener('click', () => {
                showHighlights(tour);
            });

            tourContainer.appendChild(tourCard);
        });
    } catch (error) {
        console.error(error);
    }
}

function getRandomTours(tours, count) {
    let shuffled = [...tours];
    const limit = Math.min(count, shuffled.length);
    for (let i = 0; i < limit; i++) {
        const randomPos = Math.floor(Math.random() * shuffled.length);
        const temp = shuffled[i];
        shuffled[i] = shuffled[randomPos];
        shuffled[randomPos] = temp;
    }
    return shuffled.slice(0, limit);
}

function showHighlights(tour) {
    const modal = dialogBox.querySelector('.modal');
    modal.innerHTML = `
    <h3>${tour.tour_name}</h3>
    <p>Tour Highlights</p>
    <ul></ul>`;

    const highlightsList = modal.querySelector('ul');
    tour.tour_highlights.forEach((highlight) => {
        highlightsList.innerHTML += `<li>${highlight}</li>`;
    });

    dialogBox.showModal();
}

closeButton.addEventListener('click', () => {
    dialogBox.close();
});

fetchTours();

document.getElementById('tour-button').addEventListener('click', function () {
    window.location.href = 'tour.html';
});

