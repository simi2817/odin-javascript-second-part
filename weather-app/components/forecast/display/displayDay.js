const displayDay = (data) => {
    const container = document.getElementById('dayHourContainer');
    container.innerHTML = '';
    
    const div = document.createElement('ul');
    div.classList.add('day');

    const sunrise = document.createElement('li');
    sunrise.textContent = `Sunrise: ${data.sunrise}`;
    div.appendChild(sunrise);

    const sunset = document.createElement('li');
    sunset.textContent = `Sunset: ${data.sunset}`;
    div.appendChild(sunset);

    const moonrise = document.createElement('li');
    moonrise.textContent = `Moonrise: ${data.moonrise}`;
    div.appendChild(moonrise);

    const moonset = document.createElement('li');
    moonset.textContent = `Moonset: ${data.moonset}`;
    div.appendChild(moonset);

    const maxTemp = document.createElement('li');
    maxTemp.textContent = `Max Temp: ${data.maxtemp_c}`;
    div.appendChild(maxTemp);

    const minTemp = document.createElement('li');
    minTemp.textContent = `Min Temp: ${data.mintemp_c}`;
    div.appendChild(minTemp);

    const chanceOfRain = document.createElement('li');
    chanceOfRain.textContent = `Chance of Rain: ${data.daily_will_it_rain}`;
    div.appendChild(chanceOfRain);

    container.appendChild(div);

    return container;
}

export default displayDay;