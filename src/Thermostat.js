import React from 'react';
import Temperature from './Temperature';
import Weather from './Weather';
import PowerSave from './PowerSave';

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

export default Thermostat;
