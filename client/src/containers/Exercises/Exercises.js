import React, { useState } from 'react';
import { connect } from 'react-redux';

import ExerciseDataForm from "../../components/ExerciseForm/ExerciseDataForm";
import Button from "../../components/UI/Button/Button";
import ExerciseList from "../../components/ExerciseList/ExerciseList";

import { getExercises } from "../../store/actions/exercises";

const Exercises = (props) => {

    const [showExercises, setShowExercises] = useState(false);

    const formButtonClicked = () => {
        props.getExercises();
        setShowExercises(!showExercises);
    }

    return (
        <React.Fragment>
            <ExerciseDataForm/>
            <Button
                clicked={formButtonClicked}
                text={showExercises ? 'Hide Exercises' : 'View Exercises'}/>
            {showExercises ? <ExerciseList /> : null}
        </React.Fragment>
    );
};

export default connect(
    null,
    {
        getExercises
    }
)(Exercises);
