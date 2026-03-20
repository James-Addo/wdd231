if (window.location.pathname.includes('directory.html')) {
    const mainContainer = document.querySelector('.main-container');
    async function fetchMembers() {
        try {
            const response = await fetch('data/members.json');
            const members = await response.json();
            return members;
        } catch (error) {
            console.error(error);
        }
    }

    async function displayMembers(members) {
        mainContainer.innerHTML = `
      <div class="menu">
        <button id="grid">Grid</button>
        <button id="list">List</button>
      </div>
      <div id="members-container" class="grid-view">
        <!-- member cards will be generated here -->
      </div>
    `;
        const membersContainer = document.getElementById('members-container');
        const gridButton = document.getElementById('grid');
        const listButton = document.getElementById('list');
        let viewMode = 'grid';
        gridButton.addEventListener('click', () => {
            viewMode = 'grid';
            displayGridView(members, membersContainer);
        });
        listButton.addEventListener('click', () => {
            viewMode = 'list';
            displayListView(members, membersContainer);
        });
        if (viewMode === 'grid') {
            displayGridView(members, membersContainer);
        } else {
            displayListView(members, membersContainer);
        }
    }

    function displayGridView(members, container) {
        container.classList.remove('list-view');
        container.classList.add('grid-view');
        container.innerHTML = '';
        members.forEach((member) => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');
            memberCard.innerHTML = `
        <img src="images/${member.imageFile}" alt="${member.companyName}" loading="lazy">
        <h2>${member.companyName}</h2>
        <p>${member.companyAddress}</p>
        <p>${member.companyPhone}</p>
        <p><a href="${member.companyWebsite}" target="_blank">${member.companyWebsite}</a></p>
        <p>Membership Level: ${member.membershipLevel}</p>
      `;
            container.appendChild(memberCard);
        });
    }

    function displayListView(members, container) {
        container.classList.remove('grid-view');
        container.classList.add('list-view');
        container.innerHTML = `
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Membership Level</th>
          </tr>
        </thead>
        <tbody>
          <!-- table rows will be generated here -->
        </tbody>
      </table>
    `;
        const tableBody = container.querySelector('tbody');
        members.forEach((member) => {
            const tableRow = document.createElement('tr');
            tableRow.innerHTML = `
        <td>${member.companyName}</td>
        <td>${member.companyAddress}</td>
        <td>${member.companyPhone}</td>
        <td><a href="${member.companyWebsite}" target="_blank">${member.companyWebsite}</a></td>
        <td>${member.membershipLevel}</td>
      `;
            tableBody.appendChild(tableRow);
        });
    }

    fetchMembers().then((members) => displayMembers(members));
}


