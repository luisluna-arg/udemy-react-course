import React from 'react';
import WeatherLocation from '../WeatherLocation';
import PropTypes from 'prop-types';

const LocationList = ({ cities, onSelected_Location }) => {
    const handleWeatherLocationClick = (city) => {
        onSelected_Location(city);
    }
    
    const strToComponents = (cities) => (
        cities.map(city => (
            <WeatherLocation 
                key={city} 
                city={city}
                onClick_WeatherLocation={() => handleWeatherLocationClick(city)}
                />
            )
        )
    );
    
    return (<div>{strToComponents(cities)}</div>)
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelected_Location: PropTypes.func
}

export default LocationList;