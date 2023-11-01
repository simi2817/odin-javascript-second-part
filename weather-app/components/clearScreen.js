const clearScreen = () => {
    const forecast = document.getElementById('forecast');
    if(forecast.hasChildNodes())
        forecast.innerHTML = '';
    
    const forecastButtons = document.getElementById('forecastButtons');
    if(forecastButtons.hasChildNodes())
        forecastButtons.innerHTML = '';
    
    const dayHourContainer = document.getElementById('dayHourContainer');
    if(dayHourContainer.hasChildNodes())
        dayHourContainer.innerHTML = '';
}

export default clearScreen;