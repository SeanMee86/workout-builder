import React from 'react';
import classes from './ExerciseListItem.module.scss'

const ExerciseListItem = (props) => (
    <div className={classes.ListItem}>
        <h3>{props.exerciseName}</h3>
        <p><strong>Type:</strong> {props.exerciseType}</p>
        <p><strong>Description:</strong> {props.exerciseDescription}</p>
    </div>
);

export default ExerciseListItem;