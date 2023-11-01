const displayHour = (data) => {
    const container = document.getElementById('dayHourContainer');
    container.innerHTML = '';

    for(let hour of data) {
        const div = document.createElement('div');
        div.classList.add('hour');

        const time = document.createElement('p');
        time.textContent = hour.time;
        div.appendChild(time);

        const img = document.createElement('img');
        img.src = hour.img;
        div.appendChild(img);

        const temp = document.createElement('p');
        temp.textContent = `${hour.tempC}°C`;
        div.appendChild(temp);

        const text = document.createElement('p');
        text.textContent = hour.text;
        div.appendChild(text);
        
        container.appendChild(div);
    }

    return container;
}

export default displayHour;