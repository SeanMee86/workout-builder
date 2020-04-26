import React from 'react';
import { Link } from "react-router-dom";

import classes from './HomePage.module.scss';

import workoutBuilderImage from '../../shared/images/workout-builder.jpg';
import workoutsImage from '../../shared/images/workouts.jpg';
import yourWorkoutsImage from '../../shared/images/your-workouts.jpg';
import userChatImage from '../../shared/images/user-chat.jpg';
import exercisesImage from '../../shared/images/exercises.jpg';

const HomePage = () => {
    return (
        <React.Fragment>
            <div className={classes.HomePage}>
                <div className={classes.Link}>
                    <Link to={'/workout-builder'}>
                        <div
                            style={{background: `url(${workoutBuilderImage}) 0% 0% / cover no-repeat`}}
                            className={classes.LinkImage} />
                        <p>Workout Builder</p>
                    </Link>
                </div>
                <div className={classes.Link}>
                    <Link to={'/workouts'}>
                        <div
                            style={{background: `url(${workoutsImage}) 0% 0% / cover no-repeat`}}
                            className={classes.LinkImage} />
                        <p>Pre-built Workouts</p>
                    </Link>
                </div>
            </div>
            <div className={classes.HomePage}>
                <div className={classes.Link}>
                    <Link to={'/user/workouts'}>
                        <div
                            style={{background: `url(${yourWorkoutsImage}) 0% 0% / cover no-repeat`}}
                            className={classes.LinkImage} />
                        <p>Your Workouts</p>
                    </Link>
                </div>
                <div className={classes.Link}>
                    <Link to={'/exercises'}>
                        <div
                            style={{background: `url(${exercisesImage}) 0% 0% / cover no-repeat`}}
                            className={classes.LinkImage} />
                        <p>WB User Submitted Exercises</p>
                    </Link>
                </div>
            </div>
            <div className={classes.HomePage}>
                <div className={classes.Link}>
                    <Link to={'/chat'}>
                        <div
                            style={{background: `url(${userChatImage}) 0% 0% / cover no-repeat`}}
                            className={classes.LinkImage} />
                        <p>Chat with other WB Users</p>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    )
};

export default HomePage;
