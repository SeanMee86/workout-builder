import React from 'react';
import {connect} from 'react-redux';
import {removeFromWorkout} from "../../store/actions/workouts";
import classes from './WorkoutBuilder.module.scss';

const WorkoutBuilder = (props) => {

    return (
        <div className={classes.Builder}>
            {props.workout.map(exercise => {
                return (
                    <div key={exercise.id}>
                        <h2 onClick={() => props.removeFromWorkout(exercise)}>{exercise.name}</h2>
                    </div>
                )
            })}
        </div>
    )
};

const mapStateToProps = state => ({
    workout: state.workouts.workout
});

export default connect(mapStateToProps, {removeFromWorkout})(WorkoutBuilder);