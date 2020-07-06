import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import transformWeather from '../../Services/transformWeather';
import getUrlWeatherByCity from '../../Services/getUrlWeatherByCity';
import PropTypes from 'prop-types';

class WeatherLocation extends Component {

    constructor(props) {
        super(props);
        const { city } = props;
        this.state = {
            city: city,
            data: null
        };

    }

    handleUpdateClick = () => {
        fetch(getUrlWeatherByCity(this.props.city))
            .then(response => response.json())
            .then(data => {
                const newWeather = transformWeather(data);
                this.setState({ data: newWeather });
            });
    }

    componentDidMount() {
        this.handleUpdateClick();
    }

    render() {
        const { onClick_WeatherLocation } = this.props;
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont" onClick={onClick_WeatherLocation}>
                <Location city={city}></Location>
                {
                    data ? 
                        <WeatherData data={data}></WeatherData> : 
                        <CircularProgress></CircularProgress>
                }
                <button onClick={this.handleUpdateClick.bind(this)}>Actualizar</button>
            </div>
        );
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired
}

export default WeatherLocation;