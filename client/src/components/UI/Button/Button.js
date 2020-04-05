import React from 'react';
import classes from './Button.module.scss'

const Button = (props) => (
    <React.Fragment>
        <button className={classes.Button} onClick={props.clicked}>{props.text}</button>
    </React.Fragment>
);

export default Button;