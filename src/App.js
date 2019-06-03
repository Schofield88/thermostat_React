import React from 'react';
import Thermostat from './Thermostat';
import HeaderBar from './HeaderBar';

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <center>
          <HeaderBar />
          <Thermostat />
        </center>
      </React.Fragment>
    );
  }
}

export default App;
