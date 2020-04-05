import React from 'react';
import ExerciseDataForm from "../components/ExerciseForm/ExerciseDataForm";
import Button from "../components/UI/Button/Button";
import { connect } from 'react-redux';
import {getExercises} from "../store/actions/exercises";
import ExerciseList from "../components/ExerciseList/ExerciseList";

const Exercises = (props) => {

    return (
        <React.Fragment>
            <ExerciseDataForm/>
            <Button clicked={props.getExercises} text='View Exercises'/>
            <ExerciseList/>
        </React.Fragment>
    );
};

export default connect(null, {getExercises})(Exercises);