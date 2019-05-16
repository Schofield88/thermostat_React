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
      <Temperature
        temp={this.state.temp}
        onUpClick = {() => this.handleUpClick()}
        onDownClick = {() => this.handleDownClick()}
        onResetClick = {() => this.handleResetClick()}
      />
    )
  }
}

function Temperature(props) {
  return (
    <div>
      <center>
        <h1 className="bold">{props.temp}</h1>
        <button onClick={props.onDownClick}>-</button>
        <button onClick={props.onResetClick}>Reset</button>
        <button onClick={props.onUpClick}>+</button>
      </center>
    </div>
  );
}

ReactDOM.render(
  <Thermostat />,
  document.getElementById('root')
);
