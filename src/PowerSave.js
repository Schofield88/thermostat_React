import React from 'react';
import './css/style.css';

const PowerSave = props =>
    <center>
      <button className="button" onClick={props.onPowerSaveClick}>Power Save Mode</button>
    </center>;

export default PowerSave;
