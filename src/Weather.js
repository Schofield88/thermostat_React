import React from 'react';
import './css/Weather.css';

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      localTemp: 0,
      localTown: '',
      localWeather: '',
      value: '2636101',
    };
  }

  componentDidMount() {
    this.fetchWeather(this.state.value);
  };

  fetchWeather = (townId) => {
    const town = townId;
    const apiRequest = 'https://api.openweathermap.org/data/2.5/weather?id=' + town + '&appid=86367bd791a2045eb9fff221d690c0af&units=metric';
    fetch(apiRequest)
    .then(response => response.json())
    .then((data) => {
      this.setState({
        localTemp: data.main.temp,
        localTown: data.name,
        localWeather: data.weather[0].description,
      });
    });
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    this.fetchWeather(event.target.value);
  };

  render() {
    return (
      <div>
        <center>
          <select
            value={this.state.value}
            onChange ={this.handleChange}>
            <option value="2636101">Tenterden</option>
            <option value="2634677">Watford</option>
            <option value="2637221">Makers Academy</option>
          </select>
          <h3>{'Your local temperature in ' + this.state.localTown + ' is ' + this.state.localTemp + ' Celcius with ' + this.state.localWeather}</h3>
        </center>
      </div>
    )
  }
}

export default Weather;
