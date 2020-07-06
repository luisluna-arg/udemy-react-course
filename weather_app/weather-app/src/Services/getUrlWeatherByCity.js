import { baseURL, apiKey, unit } from './../constants/api_url';

const getUrlWeatherByCity = (city) => {
    return `${baseURL}?q=${city}&appid=${apiKey}&units=${unit}`;
}

export default getUrlWeatherByCity;