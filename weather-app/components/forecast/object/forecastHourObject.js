const forecastHourObject = (forecastData) => {
    let hourObject = [];
    const wholeDay = forecastData.forecast.forecastday[0].hour;
    for(const hour of wholeDay) {
        hourObject.push({
            time: hour.time.split(' ')[1],
            img: hour.condition.icon,
            text: hour.condition.text,
            tempC: hour.temp_c
        });
    }
    return hourObject;
}

export default forecastHourObject;