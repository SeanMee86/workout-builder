import React from 'react';
import {connect} from 'react-redux';
import {removeFromWorkout, clearWorkout} from "../../store/actions/workouts";
import classes from './WorkoutBuilder.module.scss';
import Button from "../UI/Button/Button";
import axios from 'axios';
import {setWorkoutVars} from "../../shared/utilities/setWorkoutVars";

const Workout = (props) => {

    const submitWorkout = (workout) => {
        const newWorkout = {
            name: props.workoutName,
            workout
        };
        axios.post('/api/workouts', newWorkout)
            .then(res => {
                // Need to let client know their workout was submitted successfully
                props.clearWorkout();
            }).catch(err => {
                console.log(err);
        })
    };

    return (
        <div className={classes.Builder}>
            {props.workout.map((exercise, ind) => {
                const {reps, sets, time, distance, rest} = setWorkoutVars(exercise);
                return (
                    <div className={classes.ExerciseCard} onClick={() => props.removeFromWorkout(exercise)} key={ind}>
                        <h2>{exercise.exercise.name}</h2>
                        <p>{exercise.exercise.type} Exercise</p>
                        {reps}
                        {time}
                        {sets}
                        {distance}
                        {rest}
                    </div>
                )
            })}
            {props.workout.length > 0 ? <Button text={'Submit Workout'} clicked={() => submitWorkout(props.workout)}/>: null}
        </div>
    )
};

const mapStateToProps = state => ({
    workout: state.workouts.workout,
    workoutName: state.workouts.workoutName
});

export default connect(mapStateToProps, {removeFromWorkout, clearWorkout})(Workout);