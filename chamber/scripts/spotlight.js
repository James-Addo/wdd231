if (window.location.pathname.includes('index.html')) {
    async function displaySpotlights() {
        try {
            const response = await fetch('data/members.json');
            const data = await response.json();

            const goldMembers = data.filter(member => member.membershipLevel === 3);
            const silverMembers = data.filter(member => member.membershipLevel === 2);

            const spotlightMembers = [...goldMembers, ...silverMembers];

            const randomMembers = [];
            for (let i = 0; i < Math.random() * (3 - 2) + 2; i++) {
                const randomIndex = Math.floor(Math.random() * spotlightMembers.length);
                randomMembers.push(spotlightMembers.splice(randomIndex, 1)[0]);
            }

            const spotlightContainer = document.querySelector('.spotlights');
            spotlightContainer.innerHTML = '';
            randomMembers.forEach(member => {
                const spotlightCard = `
          <div class="spotlight-card">
            <div id="name">
                <h2>${member.companyName}</h2>
                <p>${member.tagline}</p>
            </div>
            <img src="images/${member.imageFile}" alt="${member.companyName}" loading="lazy">
            <div id="sub-card">
                <p>${member.companyAddress}</p>
                <p>${member.companyPhone}</p>
                <p><a href="${member.companyWebsite}" target="_blank">${member.companyWebsite}</a></p>
                <p>Membership Level: ${member.membershipLevel}</p>
            </div>
          </div>
        `;
                spotlightContainer.innerHTML += spotlightCard;
            });
        } catch (error) {
        }
    }
    displaySpotlights();
}