const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const forecastI = document.querySelector('#forecast');
const captionDesc = document.querySelector('figcaption');
const apiKey = '8f208589e59fb2ac6b299dab62b8fdde';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=-12.04&lon=-77.04&units=imperial&appid=${apiKey}`;
const apiForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=-12.04&lon=-77.04&units=imperial&appid=${apiKey}`;

async function fetchWeatherData() {
    try {
        const [currentData, forecastData] = await Promise.all([
            fetch(apiUrl).then(response => response.json()),
            fetch(apiForecastUrl).then(response => response.json())
        ]);

        if (currentData && forecastData) {
            displayCurrentWeather(currentData);
            displayForecastWeather(forecastData);
        }
    } catch (error) {
        console.error('Error al obtener datos meteorológicos:', error);
    }
}

function displayCurrentWeather(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

function displayForecastWeather(data) {
    const temperatureForecast = [];
    for (let i = 1; i < 4; i++) {
        const temp = data.list[i].main.temp;
        const icon = data.list[i].weather[0].icon;
        const iconsrc = `https://openweathermap.org/img/w/${icon}.png`;
        temperatureForecast.push(`<img src="${iconsrc}" alt=""> ${temp}&deg;F`);
    }
    forecastI.innerHTML = temperatureForecast.join(' - ');
}

fetchWeatherData();