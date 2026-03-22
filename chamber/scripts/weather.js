const weatherIcon = document.querySelector('#weather-icon');
const cityName = document.querySelector('#name');
const temperature = document.querySelector('#temperature');
const description = document.querySelector('#description');
const tempMax = document.querySelector('#temp-max');
const tempMin = document.querySelector('#temp-min');
const humidity = document.querySelector('#humidity');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');

const myKey = "856bebd699555331f686b88ca8928846"
const myLat = "5.5587"
const myLong = "-0.2005"

const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;

async function apiFetch() {
    try {
        const [currentResponse, forecastResponse] = await Promise.all([
            fetch(weatherURL),
            fetch(forecastURL)
        ]);

        if (currentResponse.ok && forecastResponse.ok) {
            const currentData = await currentResponse.json();
            const forecastData = await forecastResponse.json();

            displayResults(currentData);
            displayForecast(forecastData);
        } else {
            throw Error('Failed to fetch data');
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    cityName.innerHTML = `City: <strong>${data.name}</strong>`;
    temperature.innerHTML = `Temperature: <strong>${data.main.temp}&deg;C</strong>`;
    description.innerHTML = data.weather[0].description;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);

    tempMax.innerHTML = `High: <strong>${data.main.temp_max}&deg</strong>`;
    tempMin.innerHTML = `Low: <strong>${data.main.temp_min}&deg</strong>`;
    humidity.innerHTML = `Humidity: <strong>${data.main.humidity}%</strong>`;

    const sunriseTime = new Date(data.sys.sunrise * 1000);
    const sunsetTime = new Date(data.sys.sunset * 1000);

    const sunriseHours = sunriseTime.getHours().toString().padStart(2, '0');
    const sunriseMinutes = sunriseTime.getMinutes().toString().padStart(2, '0');
    const sunsetHours = sunsetTime.getHours().toString().padStart(2, '0');
    const sunsetMinutes = sunsetTime.getMinutes().toString().padStart(2, '0');
    sunrise.innerHTML = `Sunrise: <strong>${sunriseHours}:${sunriseMinutes}am</strong>`;
    sunset.innerHTML = `Sunset: <strong>${sunsetHours}:${sunsetMinutes}pm</strong>`;
}

function displayForecast(data) {
    const forecastContainer = document.querySelector('#forecast-container');
    const dailyForecast = data.list.filter(item => item.dt_txt.includes("00:00:00")).slice(0, 3);
    forecastContainer.innerHTML = "";
    const today = new Date();
    dailyForecast.forEach((day, index) => {
        const date = new Date(day.dt * 1000);
        let dayLabel;
        if (index === 0) {
            dayLabel = 'Today';
        } else {
            dayLabel = date.toLocaleDateString('en-GB', { weekday: 'long', timeZone: 'UTC' });
        }
        const forecastItem = document.createElement('div');
        forecastItem.innerHTML = `${dayLabel}: <strong>${day.main.temp}&deg;C</strong>`;
        forecastContainer.appendChild(forecastItem);
    });
}