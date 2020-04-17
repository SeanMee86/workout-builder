import React from 'react';
import { connect } from 'react-redux';

import { showModal } from "../../../store/actions/ui";
import { loadExercise } from "../../../store/actions/exercises";

import classes from '../../../shared/styles/ListItems.module.scss'

const ExerciseListItem = (props) => (
    <div
        onClick={() => {
            if(props.shouldHover) {
                props.showModal();
                props.loadExercise({
                    name: props.exerciseName,
                    type: props.exerciseType,
                    description: props.exerciseDescription,
                    id: props.id
                })
            }
        }}
        className={`${classes.ListItem} ${props.shouldHover ? classes.Hover : null}`}>
        <h3>{props.exerciseName}</h3>
        <p><strong>Type:</strong> {props.exerciseType}</p>
        <p><strong>Description:</strong> {props.exerciseDescription}</p>
    </div>
);

export default connect(
    null,
    {
        showModal,
        loadExercise
    }
)(ExerciseListItem);