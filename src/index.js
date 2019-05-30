/*
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Thermostat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 20,
      minimum: 10,
      powerSave: true,
      maxTemp: 25,
    }
  }

  saveOn() {
    this.setState({
      powerSave: true,
    });

    this.setMaxTemp();
  }

  saveOff() {
    this.setState({
      powerSave: false,
    });

    this.setMaxTemp();
  }

  setMaxTemp() {
    let temp;
    const powerSave = this.state.powerSave;
    if (powerSave) {
      temp = 25;
    } else {
      temp = 32;
    }

    this.setState({
      maxTemp: temp,
    })
  }

  handlePowerSaveClick() {
    const powerSave = this.state.powerSave;
    if (powerSave) {
      this.saveOff();
    } else {
      this.saveOn();
    }
  }

  handleUpClick() {
    let temp = this.state.temp;
    const max = this.state.maxTemp;
    if (temp === max) {
      return;
    }

    this.setState({
      temp: temp += 1,
    });
  }

  handleDownClick() {
    let temp = this.state.temp;
    const min = this.state.minimum;
    if (temp === min) {
      return;
    }

    this.setState({
      temp: temp -= 1,
    });
  }

  handleResetClick() {
    this.setState({
      temp: 20,
    });
  }

  render() {
    return (
      <div>
        <Temperature
          temp={this.state.temp}
          onUpClick = {() => this.handleUpClick()}
          onDownClick = {() => this.handleDownClick()}
          onResetClick = {() => this.handleResetClick()}
        />
        <PowerSave
          onPowerSaveClick = {() => this.handlePowerSaveClick()}
        />
        <Weather />
      </div>
    )
  }
}

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

const Temperature = props =>
    <div>
      <center>
        <h1 className="bold" data-cy="temperature">{props.temp}</h1>
        <button className="button" data-cy="down" onClick={props.onDownClick}>-</button>
        <button className="button" data-cy="reset" onClick={props.onResetClick}>Reset</button>
        <button className="button" data-cy="up" onClick={props.onUpClick}>+</button>
      </center>
    </div>;

const PowerSave = props =>
    <center>
      <button className="powersave" onClick={props.onPowerSaveClick}>Power Save Mode</button>
    </center>;

ReactDOM.render(
  <Thermostat />,
  document.getElementById('root')
);

*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
