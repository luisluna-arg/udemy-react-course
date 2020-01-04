import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import PropTypes from 'prop-types';

const WeatherLocation = () => (
    <div class="weatherLocationCont">
        <Location city={"Comodoro Rivadavia"}></Location>
        <WeatherData></WeatherData>
    </div>
);

export default WeatherLocation;