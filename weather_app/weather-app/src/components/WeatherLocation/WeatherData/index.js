import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from '../../../constants/weather';
import './styles.css';

const WeatherData = () => (
    <div className="weatherDataCont">
    <WeatherTemperature 
        temperature={20} 
        weatherState={SUN}
        />
    <WeatherExtraInfo humidity={80} wind={"10 m/s"} />
    </div>
);

export default WeatherData;