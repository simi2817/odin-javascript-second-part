import displayWeather from "../display/displayWeather.js";
import weatherObject from "../object/weatherObject.js";
import createForecast from "../../forecast/buttons/createForecast.js";
import handlingError from "../../error/handlingError.js";
import loading from "../../loading/loading.js";

const getWeatherData = async(region) => {
    try {
        loading(true);
        
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=63db534bb9554cb89fa104322233010&q=${region}`, {mode: "cors"});
       
        const weatherData = await response.json();

        const objectGenerated = weatherObject(weatherData);
        displayWeather(objectGenerated);

        createForecast(region);
    }
    catch(error) {
        handlingError();
        console.log(error);
    }
    finally {
        loading(false);
    }
}

export default getWeatherData;