import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import Button from "../UI/Button/Button";

import { removeFromWorkout, clearWorkout } from "../../store/actions/workouts";
import { setModalContent, showModal } from "../../store/actions/ui";

import setWorkoutVars from "../../shared/utilities/setWorkoutVars";

import classes from './Workout.module.scss';

const Workout = (props) => {

    const successMessage = (content) => (
        <React.Fragment>
            <h3>Thank You, Your Workout: <strong>{content}</strong> has been submitted.</h3>
        </React.Fragment>
    );

    const errorMessage = (content) => (
        <React.Fragment>
            {content}
        </React.Fragment>
    );

    const submissionSuccess = (workoutName) => {
        props.setModalContent(successMessage(workoutName));
        props.showModal();
        props.clearWorkout();
    };

    const submissionFail = (error) => {
        props.setModalContent(errorMessage(error));
        props.showModal();
    };

    const submitWorkout = (workout) => {
        const newWorkout = {
            name: props.workoutName,
            workout
        };
        axios.post('/api/workouts', newWorkout)
            .then(res => {
                submissionSuccess(res.data.name);
            }).catch(err => {
                submissionFail(err.response.data.message)
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

export default connect(
    mapStateToProps,
    {
        removeFromWorkout,
        clearWorkout,
        setModalContent,
        showModal
    }
)(Workout);