import React from 'react';
import {connect} from 'react-redux';
import {removeFromWorkout} from "../../store/actions/workouts";
import classes from './WorkoutBuilder.module.scss';

const WorkoutBuilder = (props) => {



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
                        <h2>{exercise.name}</h2>
                        <p>{exercise.type} Exercise</p>
                        {reps}
                        {time}
                        {sets}
                        {distance}
                        {rest}
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