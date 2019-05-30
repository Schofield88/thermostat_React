import React from 'react';
import './style.css';

const Temperature = props =>
    <div>
      <center>
        <h1 className="bold" data-cy="temperature">{props.temp}</h1>
        <button className="button" data-cy="down" onClick={props.onDownClick}>-</button>
        <button className="button" data-cy="reset" onClick={props.onResetClick}>Reset</button>
        <button className="button" data-cy="up" onClick={props.onUpClick}>+</button>
      </center>
    </div>;

export default Temperature;
