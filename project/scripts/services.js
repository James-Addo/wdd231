const servicesContainer = document.querySelector('.services-container');

async function fetchServices() {
    try {
        const response = await fetch('project-data/services.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

async function displayServices() {
    const services = await fetchServices();
    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.classList.add('service-card');
        const serviceFeatures = service.features.map(feature => `<li>${feature}</li>`).join('');
        serviceCard.innerHTML = `
      <img src="${service.image}" alt="${service.name}" loading="lazy">
      <h2>${service.name}</h2>
      <p>${service.description}</p>
      <ul>
        ${serviceFeatures}
      </ul>
    `;
        servicesContainer.appendChild(serviceCard);
    });
}

displayServices();


const contactNowButton = document.getElementById('in-touch');
contactNowButton.addEventListener('click', () => {
    window.location.href = 'contact.html';
});
