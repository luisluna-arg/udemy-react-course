import React from 'react';
import PropTypes from 'prop-types';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import './styles.css';

const WeatherData = ({ data: { temperature, state, humidity, wind } }) => (
    <div className="weatherDataCont">
        <WeatherTemperature
            temperature={temperature}
            weatherState={state}
        />
        <WeatherExtraInfo humidity={humidity} wind={wind} />
    </div>
);

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        state: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
};

export default WeatherData;