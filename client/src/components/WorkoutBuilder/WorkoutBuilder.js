import React from 'react';
import {connect} from 'react-redux';
import {removeFromWorkout} from "../../store/actions/workouts";
import classes from './WorkoutBuilder.module.scss';
import Button from "../UI/Button/Button";
import axios from 'axios';

const WorkoutBuilder = (props) => {

    const submitWorkout = (workout) => {
        const newWorkout = {
            name: props.workoutName,
            workout
        };
        axios.post('/api/workouts', newWorkout)
            .then(res => {
                console.log(res.data);
            }).catch(err => {
                console.log(err);
        })
    };

    return (
        <div className={classes.Builder}>
            {props.workout.map((exercise, ind) => {
                const reps = exercise.repetitions ? (<p>Reps: {exercise.repetitions}</p>): null;
                const sets = exercise.sets ? (<p>Sets: {exercise.sets}</p>) : null;
                const rest = exercise.rest ? (<p>Rest: {exercise.rest}</p>): null;
                const time = exercise.time ? (<p>Time: {exercise.time}</p>) : null;
                const distance = exercise.distance ? (<p>Distance: {exercise.distance}</p>) : null;
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

export default connect(mapStateToProps, {removeFromWorkout})(WorkoutBuilder);