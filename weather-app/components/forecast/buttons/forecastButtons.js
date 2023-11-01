import displayDay from "../display/displayDay.js";
import displayHour from "../display/displayHour.js";

const generateForecastButtons = (data) => {
    const forecast = document.getElementById('forecastButtons');
    
    const dayButton = document.createElement('button');
    dayButton.textContent = 'Day';
    dayButton.addEventListener('click', () => {
        displayDay(data[0])
    });
    forecast.appendChild(dayButton);

    const hourButton = document.createElement('button');
    hourButton.textContent = 'Hour';
    hourButton.addEventListener('click', () => {
        displayHour(data[1])
    });
    forecast.appendChild(hourButton);

    return forecast;
}

export default generateForecastButtons;