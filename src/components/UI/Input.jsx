/* eslint-disable react/display-name */

import React from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id} className={classes.visuallyHidden}>{props.label}</label>
      <input ref={ref} {...props.input} className={classes.visuallyHidden}/>
    </div>
  );
});

export default Input;