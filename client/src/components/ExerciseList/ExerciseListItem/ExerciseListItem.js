import React from 'react';
import { connect } from 'react-redux';

import AddToWorkoutForm from "../../AddToWorkoutForm/AddToWorkoutForm";
import NameWorkoutField from "../../NameWorkoutField/NameWorkoutField";

import { showModal, setModalContent } from "../../../store/actions/ui";
import { loadExercise } from "../../../store/actions/exercises";

import classes from '../../../shared/styles/ListItems.module.scss'

const ExerciseListItem = (props) => {

    const listItemClicked = () => {
        if(props.clickable) {
            !props.workouts.workoutName ?
                props.setModalContent(<NameWorkoutField shouldContinue/>) :
                props.setModalContent(<AddToWorkoutForm/>);
            props.showModal();
            props.loadExercise({
                name: props.exerciseName,
                type: props.exerciseType,
                description: props.exerciseDescription,
                id: props.id
            })
        }
    };

    return(
        <div
            onClick={listItemClicked}
            className={`${classes.ListItem} ${props.clickable ? classes.Hover : null}`}>
            <h3>{props.exerciseName}</h3>
            <p><strong>Type:</strong> {props.exerciseType}</p>
            <p><strong>Description:</strong> {props.exerciseDescription}</p>
        </div>
    );
};

const mapStateToProps = state => ({
    workouts: state.workouts
});

export default connect(
    mapStateToProps,
    {
        showModal,
        setModalContent,
        loadExercise
    }
)(ExerciseListItem);