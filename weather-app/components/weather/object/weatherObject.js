const weatherObject = (weatherData) => {
    const object = {};
    object['location'] = weatherData.location.name;
    object['condition'] = weatherData.current.condition.text;
    object['icon'] = weatherData.current.condition.icon;
    object['celsius'] = weatherData.current.temp_c;
    object['fahrenheit'] = weatherData.current.temp_f;
    return object;
}

export default weatherObject;