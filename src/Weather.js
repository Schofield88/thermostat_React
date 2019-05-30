import React from 'react';
import './style.css';

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      localTemp: 0,
      localTown: '',
      localWeather: '',
    };

    (() => {
      fetch('https://api.openweathermap.org/data/2.5/weather?id=2636101&appid=86367bd791a2045eb9fff221d690c0af&units=metric')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          localTemp: data.main.temp,
          localTown: data.name,
          localWeather: data.weather[0].description,
        });
      });
    })();

  }

  render() {
    return (
      <div>
        <center>
          <h3>{'Your local temperature in ' + this.state.localTown + ' is ' + this.state.localTemp + ' Celcius with ' + this.state.localWeather}</h3>
        </center>
      </div>
    )
  }
}

export default Weather;
