import React from 'react';
import classes from './ExerciseListItem.module.scss'
import { connect } from 'react-redux';
import { showModal } from "../../../store/actions/workouts";
import { loadExercise } from "../../../store/actions/exercises";

const ExerciseListItem = (props) => (
    <div
        onClick={() => {
            props.showModal();
            props.loadExercise({
                name: props.exerciseName,
                type: props.exerciseType,
                description: props.exerciseDescription,
                id: props.id
            })
        }}
        className={`${classes.ListItem} ${props.shouldHover ? classes.Hover : null}`}>
        <h3>{props.exerciseName}</h3>
        <p><strong>Type:</strong> {props.exerciseType}</p>
        <p><strong>Description:</strong> {props.exerciseDescription}</p>
    </div>
);

export default connect(null, {showModal, loadExercise})(ExerciseListItem);