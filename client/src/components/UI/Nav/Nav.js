import React from 'react';
import {NavLink, withRouter} from "react-router-dom";
import classes from './Nav.module.scss'
import { connect } from 'react-redux';
import { logOutUser } from "../../../store/actions/users";

const Nav = (props) => {

    const removeSideDrawer = () => {
        document.getElementById('menu-toggle').checked = false;
    };

    let navigation = <ul className={classes.List}>
        <li onClick={removeSideDrawer}>
            <NavLink
                activeClassName={classes.active}
                to={'/login'}>Log In</NavLink>
        </li>
        <li onClick={removeSideDrawer}>
            <NavLink
                activeClassName={classes.active}
                to={'/register'}>Register</NavLink>
        </li>
    </ul>;

    if(props.authenticated){
        navigation = <ul className={classes.List}>
            <li onClick={removeSideDrawer}>
                <NavLink
                    activeClassName={classes.active}
                    to={'/workout-builder'}>Workout Builder</NavLink>
            </li>
            <li onClick={removeSideDrawer}>
                <NavLink
                    activeClassName={classes.active}
                    to={'/workouts'}>Workouts</NavLink>
            </li>
            <li onClick={removeSideDrawer}>
                <NavLink
                    activeClassName={classes.active}
                    to={'/user/workouts'}>Your Workouts</NavLink>
            </li>
            <li onClick={removeSideDrawer}>
                <NavLink
                    activeClassName={classes.active}
                    to={'/exercises'}>Exercises</NavLink>
            </li>
            <li onClick={() => {
                props.logOutUser();
                removeSideDrawer();
            }}>
                <NavLink
                    to={'/'}>
                Log Out
                </NavLink>
            </li>
        </ul>
    }

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
                            {navigation}
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

const mapStateToProps = state => ({
    authenticated: state.user.isAuth
});

export default withRouter(connect(mapStateToProps, {logOutUser})(Nav));