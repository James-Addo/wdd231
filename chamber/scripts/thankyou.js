const params = new URLSearchParams(window.location.search);
const firstName = params.get('firstName');
const lastName = params.get('lastName');
const email = params.get('email');
const mobilePhone = params.get('mobilePhone');
const businessName = params.get('businessName');
const timestamp = params.get('timestamp');

document.querySelector('#firstName').textContent = firstName;
document.querySelector('#lastName').textContent = lastName;
document.querySelector('#email').textContent = email;
document.querySelector('#mobilePhone').textContent = mobilePhone;
document.querySelector('#businessName').textContent = businessName;
document.querySelector('#timestamp').textContent = timestamp;