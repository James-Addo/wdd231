const mainContainer = document.querySelector('.tour-container');

async function fetchTours() {
  try {
    const response = await fetch('project-data/tours.json');
    const tours = await response.json();
    return tours;
  } catch (error) {
    console.error(error);
  }
}

async function displayTours(tours) {
  mainContainer.innerHTML = `
    <div class="menu">
      <button id="grid">Grid</button>
      <button id="list">List</button>
    </div>
    <div id="tours-container" class="grid-view">
      <!-- tour cards will be generated here -->
    </div>
  `;

  const toursContainer = document.getElementById('tours-container');
  const gridButton = document.getElementById('grid');
  const listButton = document.getElementById('list');
  let viewMode = 'grid';

  gridButton.addEventListener('click', () => {
    viewMode = 'grid';
    displayGridView(tours, toursContainer);
  });

  listButton.addEventListener('click', () => {
    viewMode = 'list';
    displayListView(tours, toursContainer);
  });

  if (viewMode === 'grid') {
    displayGridView(tours, toursContainer);
  } else {
    displayListView(tours, toursContainer);
  }
}

function displayGridView(tours, container) {
  container.classList.remove('list-view');
  container.classList.add('grid-view');
  container.innerHTML = '';
  tours.forEach((tour) => {
    const tourCard = document.createElement('div');
    tourCard.classList.add('tours-card');
    tourCard.innerHTML = `
      <img src="${tour.image_url}" alt="${tour.tour_name}" loading="lazy">
      <h2>${tour.tour_name}</h2>
      <address>${tour.location}</address>
      <p id="tours-card-p1">${tour.category}</p>
      <p id="tours-card-p2">${tour.description}</p>
      <button class="view-highlights" data-name="${tour.tour_name}" data-highlights="${tour.tour_highlights.join(',')}">View Highlights</button>
    `;
    container.appendChild(tourCard);

    const viewHighlightsButton = tourCard.querySelector('.view-highlights');
    viewHighlightsButton.addEventListener('click', (event) => {
      const name = event.target.getAttribute('data-name');
      const highlights = event.target.getAttribute('data-highlights').split(',');
      const dialogBox = document.getElementById('dialogBox');
      const modal = dialogBox.querySelector('.modal');
      modal.innerHTML = `
        <h2>${name}</h2>
        <p>Tour Highlights</p>
        <ul>
          ${highlights.map((highlight) => `<li>${highlight}</li>`).join('')}
        </ul>
      `;
      dialogBox.showModal();
    });
  });
}

function displayListView(tours, container) {
  container.classList.remove('grid-view');
  container.classList.add('list-view');
  container.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Tour Name</th>
          <th>Location</th>
          <th>Category</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <!-- table rows will be generated here -->
      </tbody>
    </table>
  `;

  const tableBody = container.querySelector('tbody');
  tours.forEach((tour) => {
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
      <td>${tour.tour_name}</td>
      <td>${tour.location}</td>
      <td>${tour.category}</td>
      <td>${tour.description}</td>
    `;
    tableBody.appendChild(tableRow);
  });
}

const closeButton = document.getElementById('closeButton');
closeButton.addEventListener('click', () => {
  const dialogBox = document.getElementById('dialogBox');
  dialogBox.close();
});

fetchTours().then((tours) => displayTours(tours));


const bookNowButton = document.getElementById('book-now');
const bookingForm = document.querySelector('.booking-form');

bookNowButton.addEventListener('click', () => {
  bookingForm.scrollIntoView({ behavior: 'smooth' });
});
