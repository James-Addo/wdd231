if (window.location.pathname.includes('index.html')) {
    async function displaySpotlights() {
        try {
            const response = await fetch('data/members.json');
            const data = await response.json();

            // Filter gold and silver members
            const goldMembers = data.filter(member => member.membershipLevel === 3);
            const silverMembers = data.filter(member => member.membershipLevel === 2);

            // Combine gold and silver members
            const spotlightMembers = [...goldMembers, ...silverMembers];

            // Randomly select 2-3 members
            const randomMembers = [];
            for (let i = 0; i < Math.random() * (3 - 2) + 2; i++) {
                const randomIndex = Math.floor(Math.random() * spotlightMembers.length);
                randomMembers.push(spotlightMembers.splice(randomIndex, 1)[0]);
            }

            // Create spotlight cards
            const spotlightContainer = document.querySelector('.spotlights');
            spotlightContainer.innerHTML = '';
            randomMembers.forEach(member => {
                const spotlightCard = `
          <div class="spotlight-card">
            <img src="images/${member.imageFile}" alt="${member.companyName} Logo">
            <h3>${member.companyName}</h3>
            <p>${member.companyAddress}</p>
            <p>Phone: ${member.companyPhone}</p>
            <p><a href="${member.companyWebsite}" target="_blank">Visit Website</a></p>
            <p>Membership Level: ${member.membershipLevel === 3 ? 'Gold' : 'Silver'}</p>
          </div>
        `;
                spotlightContainer.innerHTML += spotlightCard;
            });
        } catch (error) {
            // handle error silently
        }
    }
    displaySpotlights();
}