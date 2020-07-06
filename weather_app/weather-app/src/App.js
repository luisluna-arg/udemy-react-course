import React, { Component } from 'react';
import LocationList from './components/LocationList/LocationList'
import './App.css';

const cities = [
  "Comodoro Rivadavia,ar",
  "Buenos Aires,ar",
  "Coyhaique,cl",
  "Barcelona,es",
  "Castleside, GB",
  "Huesca, es",
  "Bogota, co",
  "Washington, us",
];

class App extends Component {
  handleSelectionLocation = (city) => {
    console.log(city);
  }

  render() {
    return (
      <div className="App">
        <LocationList cities={cities} onSelected_Location={this.handleSelectionLocation}></LocationList>
      </div>
    );
  }
}

export default App;
