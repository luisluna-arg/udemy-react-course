import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './styles.css';
import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from '../../../constants/weather';

const getWeatherIcon = weatherState => {
    return <WeatherIcons className="wicon" name={!!weatherState ? weatherState : SUN} />;
    // if (weatherState)
    //     return <WeatherIcons className="wicon" name={weatherState ?? SUN} />;
    // else
    //     return <WeatherIcons className="wicon" name={SUN} />;
};

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className="weatherTemperatureCont">
        {getWeatherIcon(weatherState)}
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{` Cº`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;