const urlParams = new URLSearchParams(window.location.search);
document.getElementById('name').textContent = urlParams.get('name');
document.getElementById('email').textContent = urlParams.get('email');
document.getElementById('phone').textContent = urlParams.get('phone');
document.getElementById('tour').textContent = urlParams.get('tour');
document.getElementById('participants').textContent = urlParams.get('participants');
document.getElementById('date').textContent = urlParams.get('date');
document.getElementById('timestamp').textContent = urlParams.get('timestamp');


