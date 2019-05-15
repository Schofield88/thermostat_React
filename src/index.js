import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Thermostat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 20,
    }
  }

  handleUpClick() {
    let temp = this.state.temp;

    this.setState({
      temp: temp += 1,
    });
  }

  handleDownClick() {
    let temp = this.state.temp;

    this.setState({
      temp: temp -= 1,
    });
  }

  handleResetClick() {    
    this.setState({
      temp: 20,
    })
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
        <button className="button" onClick={props.onDownClick}>-</button>
        <button className="button" onClick={props.onResetClick}>Reset</button>
        <button className="button" onClick={props.onUpClick}>+</button>
      </center>
    </div>
  );
}

ReactDOM.render(
  <Thermostat />,
  document.getElementById('root')
);
