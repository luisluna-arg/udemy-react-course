import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE
} from './../constants/weather';

const getWeatherState = weatherState => {
    const { id } = weatherState;

    if (id < 300) {
        return THUNDER;
    } else if (id < 400) {
        return DRIZZLE;
    } else if (id < 600) {
        return RAIN;
    } else if (id < 700) {
        return SNOW;
    } else if (id === 800) {
        return SUN;
    } else { 
        return CLOUD;
    }
}

const transformWeather = weatherData => {
    const { humidity, temp } = weatherData.main;
    const { speed } = weatherData.wind;
    const weatherState = getWeatherState(weatherData.weather[0]);

    const data = {
        humidity,
        temperature: temp,
        state: weatherState,
        wind: `${speed} m/s`
    };

    return data;
};

export default transformWeather;
