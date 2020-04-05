import React from 'react';
import classes from './ExerciseListItem.module.scss'
import { connect } from 'react-redux';
import { addToWorkout } from "../../../store/actions/workouts";

const ExerciseListItem = (props) => (
    <div
        onClick={() => props.addToWorkout({
            name: props.exerciseName,
            type: props.exerciseType,
            description: props.exerciseDescription,
            id: props.id
        })}
        className={classes.ListItem}>
        <h3>{props.exerciseName}</h3>
        <p><strong>Type:</strong> {props.exerciseType}</p>
        <p><strong>Description:</strong> {props.exerciseDescription}</p>
    </div>
);

export default connect(null, {addToWorkout})(ExerciseListItem);