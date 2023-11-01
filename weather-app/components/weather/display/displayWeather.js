const displayWeather = (object) => {
    const section = document.getElementById('section');
    section.classList.add('section');
    
    const place = document.getElementById('place');
    place.textContent = object.location;
    
    const img = document.getElementById('weatherIcon');
    img.src = object.icon;

    const celsius = document.getElementById('celsius');
    celsius.textContent = `${object.celsius}°C`;

    const fahrenheit = document.getElementById('fahrenheit');
    fahrenheit.textContent = `${object.fahrenheit}°F`;
    
    const condition = document.getElementById('condition');
    condition.textContent = object.condition;  
}

export default displayWeather;