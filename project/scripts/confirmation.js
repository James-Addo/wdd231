const urlParams = new URLSearchParams(window.location.search);

const name = urlParams.get('name');
const email = urlParams.get('email');
const phone = urlParams.get('phone');
const tour = urlParams.get('tour');
const participants = urlParams.get('participants');
const date = urlParams.get('date');
const timestamp = urlParams.get('timestamp');

document.getElementById('name').textContent = name;
document.getElementById('email').textContent = email;
document.getElementById('phone').textContent = phone;
document.getElementById('tour').textContent = tour;
document.getElementById('participants').textContent = participants;
document.getElementById('date').textContent = date;
document.getElementById('timestamp').textContent = timestamp;