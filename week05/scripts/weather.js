import API_KEY from "../../scripts/config.js";

const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const lat = "49.75";
const lon = "6.64";
const api_key = API_KEY;
const units = "imperial";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=${units}`;

const apiFetch = async () => {
    let response = await fetch(url);
    if (!response.ok) {
        throw Error(await response.text());
    }
    let data = await response.json();
    displayResults(data);
}

const displayResults = (data) => {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    let icon = data.weather[0].icon;
    const iconSrc = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    let description = data.weather[0].description;
    weatherIcon.setAttribute("src", iconSrc);
    weatherIcon.setAttribute("alt", description);
    captionDesc.textContent = description;
}

apiFetch();



