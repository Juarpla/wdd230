import API_KEY from "./config.js";

const city = document.querySelector("#city");
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#desc");

const lat = "-12.05";
const lon = "-77.04";
const api_key = API_KEY;
const units = "imperial";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=${units}`;

const apiFetch = async () => {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw Error(await response.text());
        }
        let data = await response.json();
        displayResults(data);
    } catch (error) {
        console.log(error);
    }
}

const displayResults = (data) => {
    let temp = Math.round(data.main.temp);
    currentTemp.innerHTML = `${temp}&deg;F`;
    let icon = data.weather[0].icon;
    const iconSrc = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    let description = data.weather[0].description;
    weatherIcon.setAttribute("src", iconSrc);
    weatherIcon.setAttribute("alt", description);
    city.textContent = "Lima, Peru";
    captionDesc.textContent = description;
}

apiFetch();
