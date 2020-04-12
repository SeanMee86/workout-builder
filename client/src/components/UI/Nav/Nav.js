import React from 'react';
import {NavLink} from "react-router-dom";
import classes from './Nav.module.scss'

const Nav = () => (
    <ul className={classes.Nav}>
        <li><NavLink activeClassName={classes.active} exact to={'/'}>Home</NavLink></li>
        <li><NavLink activeClassName={classes.active} to={'/workout-builder'}>Workout Builder</NavLink></li>
        <li><NavLink activeClassName={classes.active} to={'/workouts'}>Workouts</NavLink></li>
        <li><NavLink activeClassName={classes.active} to={'/exercises'}>Exercises</NavLink></li>
    </ul>
);

export default Nav;