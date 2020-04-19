import React from 'react';

import Button from "../../components/UI/Button/Button";

import classes from './LandingPage.module.scss'

import heroImage from '../../shared/images/HeroLp.jpg'

const LandingPage = (props) => (
    <div className={classes.LandingPage}>
        <div
            style={{
                background: `url(${heroImage}) no-repeat center`,
                backgroundSize: 'cover'
            }}
            className={classes.Hero}>
            <div className={classes.HeroContent}>
                <h2>Welcome to the Workout Builder App</h2>
                <p>This app is designed to help you build, manage, and store YOUR Custom Workouts and give your Fitness Goals more structure.</p>
                <div className={classes.Buttons}>
                    <Button text={'Log In'} clicked={() => props.history.push('/login')}/>
                    <Button text={'Register'} clicked={() => props.history.push('/register')}/>
                </div>
            </div>
        </div>
    </div>
);

export default LandingPage