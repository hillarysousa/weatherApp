import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import GoogleMap from '../components/google_map';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {lat: null, lon: null};
  }
  getLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({lat: position.coords.latitude, lon: position.coords.longitude});
    });
  }

  componentDidMount() {
    this.getLocation()
  }
  render() {
    if (this.state.lat === null) {
      return null;
    }
    return (
      <div>
        <GoogleMap lat={this.state.lat} lon={this.state.lon} />
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
