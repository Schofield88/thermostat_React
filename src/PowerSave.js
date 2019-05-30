import React from 'react';
import './style.css';

const PowerSave = props =>
    <center>
      <button className="powersave" onClick={props.onPowerSaveClick}>Power Save Mode</button>
    </center>;

export default PowerSave;
