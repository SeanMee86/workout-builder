import React from 'react';
import { Link } from "react-router-dom";

import classes from './HomePage.module.scss';

import workoutBuilderImage from '../../shared/images/workoutBuilder.jpg';
import workoutsImage from '../../shared/images/workouts.jpg';
import yourWorkoutsImage from '../../shared/images/yourWorkouts.jpg';

const HomePage = () => {
    return (
        <React.Fragment>
            <div className={classes.HomePage}>
                <div className={classes.Link}>
                    <Link to={'/workout-builder'}>
                        <div
                            style={{background: `url(${workoutBuilderImage}) 0% 0% / cover no-repeat`}}
                            className={classes.LinkImage} />
                        {/*<p>Build your custom workout using exercises submitted by the WB community!</p>*/}
                        <p>Workout Builder</p>
                    </Link>
                </div>
                <div className={classes.Link}>
                    <Link to={'/workouts'}>
                        <div
                            style={{background: `url(${workoutsImage}) 0% 0% / cover no-repeat`}}
                            className={classes.LinkImage} />
                        {/*<p>View full workouts built by other WB auth!</p>*/}
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
                        {/*<p>Build your custom workout using exercises submitted by the WB community!</p>*/}
                        <p>Your Workouts</p>
                    </Link>
                </div>
                <div className={classes.Link}>
                    <Link to={'/exercises'}>
                        <div
                            style={{background: `url(${workoutsImage}) 0% 0% / cover no-repeat`}}
                            className={classes.LinkImage} />
                        {/*<p>View full workouts built by other WB auth!</p>*/}
                        <p>WB User Submitted Exercises</p>
                    </Link>
                </div>
            </div>
            <div className={classes.HomePage}>
                <div className={classes.Link}>
                    <Link to={'/chat'}>
                        <div
                            style={{background: `url(${workoutBuilderImage}) 0% 0% / cover no-repeat`}}
                            className={classes.LinkImage} />
                        {/*<p>Build your custom workout using exercises submitted by the WB community!</p>*/}
                        <p>Chat with other WB Users</p>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    )
};

export default HomePage;
