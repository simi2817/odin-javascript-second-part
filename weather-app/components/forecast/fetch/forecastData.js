import forecastDayObject from "../object/forecastDayObject.js";
import forecastHourObject from "../object/forecastHourObject.js";

const forecastData = async(region) => {
    const forecast = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=63db534bb9554cb89fa104322233010&q=${region}`, {mode: "cors"});
    const forecastData = await forecast.json();
    const dayObject = forecastDayObject(forecastData);
    const hourObject = forecastHourObject(forecastData);
    return [dayObject, hourObject];
}

export default forecastData;