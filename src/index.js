import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Thermostat extends React.Component {
  constructor() {
    super();
    this.state = {
      temp: 20,
    }
  }

  render() {
    return (
      <Temperature temp={this.state.temp}/>
    )
  }
}

function Temperature(props) {
  return (
    <div>
      <center>
        <div className="bold">{props.temp}</div>
      </center>
    </div>
  );
}

ReactDOM.render(
  <Thermostat />,
  document.getElementById('root')
);
