import React from 'react';
import ReactDOM from 'react-dom';

class Temperature extends React.Component {
  render() {
    return (
      <div>
        <h1>You're off</h1>
        <h2>May God have mercy on your soul</h2>
      </div>
    )
  }
}

ReactDOM.render(
  <Temperature />,
  document.getElementById('root')
);
