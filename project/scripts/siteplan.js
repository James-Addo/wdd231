const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const lastModified = document.querySelector("#lastmodified");
lastModified.innerHTML = `Last Modification <span class="highlight">${document.lastModified}</span>`;
