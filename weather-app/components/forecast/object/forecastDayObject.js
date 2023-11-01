const forecastDayObject = (forecastData) => {
    let dayObject = {};
    dayObject['moonrise'] = forecastData.forecast['forecastday'][0].astro.moonrise;
    dayObject['moonset'] = forecastData.forecast['forecastday'][0].astro.moonset;
    dayObject['sunrise'] = forecastData.forecast['forecastday'][0].astro.sunrise;
    dayObject['sunset'] = forecastData.forecast['forecastday'][0].astro.sunset;
    dayObject['maxtemp_c'] = forecastData.forecast['forecastday'][0].day.maxtemp_c;
    dayObject['mintemp_c'] = forecastData.forecast['forecastday'][0].day.mintemp_c;
    dayObject['maxtemp_f'] = forecastData.forecast['forecastday'][0].day.maxtemp_f;
    dayObject['mintemp_f'] = forecastData.forecast['forecastday'][0].day.mintemp_f;
    dayObject['daily_will_it_rain'] = forecastData.forecast['forecastday'][0].day.daily_will_it_rain;
    dayObject['daily_will_it_snow'] = forecastData.forecast['forecastday'][0].day.daily_will_it_snow;
    return dayObject;
}

export default forecastDayObject;