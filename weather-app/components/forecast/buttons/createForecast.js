import forecastData from "../fetch/forecastData.js";
import generateForecastButtons from "./forecastButtons.js";

const createForecast = (region) => {
    const forecast = document.getElementById('forecast');
        
    const forecastButton = document.createElement('button');
    forecastButton.textContent = 'Forecast';
    forecastButton.addEventListener('click', async () => {
        const data = await forecastData(region);
        generateForecastButtons(data);
    });
    forecast.appendChild(forecastButton);
}

export default createForecast;