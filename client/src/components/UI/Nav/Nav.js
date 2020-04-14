import React from 'react';
import {NavLink} from "react-router-dom";
import classes from './Nav.module.scss'

const Nav = () => (
    <header>
        <div className={classes.menuWrapper}>
            <input title={'Menu Box'} type="checkbox" className={classes.toggler}/>
            <div className={classes.hamburger}><div></div></div>
            <nav className={classes.menu}>
                <div>
                    <div>
                        <ul className={classes.list}>
                            <li><NavLink activeClassName={classes.active} exact to={'/'}>Home</NavLink></li>
                            <li><NavLink activeClassName={classes.active} to={'/workout-builder'}>Workout Builder</NavLink></li>
                            <li><NavLink activeClassName={classes.active} to={'/workouts'}>Your Workouts</NavLink></li>
                            <li><NavLink activeClassName={classes.active} to={'/exercises'}>Exercises</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
);

export default Nav;