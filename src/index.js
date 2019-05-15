import React from 'react';
import ReactDOM from 'react-dom';

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
    <h1>{props.temp}</h1>
  );
}

ReactDOM.render(
  <Thermostat />,
  document.getElementById('root')
);
