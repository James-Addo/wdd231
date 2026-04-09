const weatherIcon = document.querySelector('#weather-icon');
const cityName = document.querySelector('#name');
const temperature = document.querySelector('#temperature');
const description = document.querySelector('#description');
const myKey = "856bebd699555331f686b88ca8928846";
const myLat = "5.5587";
const myLong = "-0.2005";
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`

async function apiFetch() {
  try {
    const response = await fetch(weatherURL);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error('Failed to fetch data');
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(data) {
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    cityName.innerHTML = `City: <strong>${data.name}</strong>`;
    temperature.innerHTML = `Temperature: <strong>${data.main.temp}&deg;C</strong>`;
    description.innerHTML = data.weather[0].description;
   
}