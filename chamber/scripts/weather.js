import API_KEY from "../../scripts/config.js";

const lat = "-12.09";
const lon = "-77.06";
const api_key = API_KEY;
const units = "imperial";

const getWeatherData = async () => {
    try {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=${units}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        const currentTemperature = Math.round(data.main.temp);
        const weatherDescription = data.weather[0].description;

        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}&units=${units}`;
        const forecastResponse = await fetch(forecastUrl);
        const forecastData = await forecastResponse.json();

        const threeDayForecast = [
            forecastData.list[1].main.temp,
            forecastData.list[9].main.temp, 
            forecastData.list[17].main.temp 
        ];

        return {
            currentTemperature,
            weatherDescription,
            threeDayForecast
        };
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
}

const weatherContainer = document.getElementById('weather-container');

const displayWeatherData = async () => {
    try {
        const { currentTemperature, weatherDescription, threeDayForecast } = await getWeatherData();

        const currentTempElement = weatherContainer.querySelector('#current-temperature');
        const descriptionElement = weatherContainer.querySelector('#weather-description');
        const forecastElements = weatherContainer.querySelectorAll('.forecast-temp');

        currentTempElement.textContent = `${currentTemperature}°F`;
        descriptionElement.textContent = weatherDescription;

        forecastElements.forEach((element, index) => {
            element.textContent = `${Math.round(threeDayForecast[index])}°F`;
        });
    } catch (error) {
        console.error('Error displaying weather data:', error);
    }
}

displayWeatherData();
