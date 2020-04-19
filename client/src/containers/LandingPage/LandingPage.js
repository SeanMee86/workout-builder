import React from 'react';
import Button from "../../components/UI/Button/Button";
import classes from './LandingPage.module.scss'

const LandingPage = (props) => (
    <div className={classes.LandingPage}>
        <h2>Welcome to the Workout Builder App</h2>
        <div className={classes.Buttons}>
            <Button text={'Log In'} clicked={() => props.history.push('/login')}/>
            <Button text={'Register'} clicked={() => props.history.push('/register')}/>
        </div>
    </div>
);

export default LandingPage