import React from 'react';
import {NavLink} from "react-router-dom";
import classes from './Nav.module.scss'

const Nav = () => {

    const removeSideDrawer = () => {
        document.getElementById('menu-toggle').checked = false;
    };

    return (
        <header>
            <div className={classes.MenuWrapper}>
                <input id={'menu-toggle'} title={'Menu Box'} type="checkbox" className={classes.Toggler}/>
                <div className={classes.Hamburger}>
                    <div></div>
                </div>
                <nav className={classes.Menu}>
                    <div>
                        <div>
                            <ul className={classes.List}>
                                <li onClick={removeSideDrawer}>
                                    <NavLink
                                        activeClassName={classes.active}
                                        exact
                                        to={'/'}>Home</NavLink>
                                </li>
                                <li onClick={removeSideDrawer}>
                                    <NavLink
                                        activeClassName={classes.active}
                                        to={'/workout-builder'}>Workout Builder</NavLink>
                                </li>
                                <li onClick={removeSideDrawer}>
                                    <NavLink
                                        activeClassName={classes.active}
                                        to={'/workouts'}>Your Workouts</NavLink>
                                </li>
                                <li onClick={removeSideDrawer}>
                                    <NavLink
                                        activeClassName={classes.active}
                                        to={'/exercises'}>Exercises</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Nav;