import React, {useState} from 'react';
import ExerciseDataForm from "../components/ExerciseForm/ExerciseDataForm";
import Button from "../components/UI/Button/Button";
import { connect } from 'react-redux';
import {getExercises} from "../store/actions/exercises";
import ExerciseList from "../components/ExerciseList/ExerciseList";

const Exercises = (props) => {

    const [showExercises, setShowExercises] = useState(false);

    return (
        <React.Fragment>
            <ExerciseDataForm/>
            <Button clicked={() => {
                props.getExercises();
                setShowExercises(!showExercises);
            }} text={showExercises ? 'Hide Exercises' : 'View Exercises'}/>
            {showExercises ? <ExerciseList shouldHover={false}/> : null}
        </React.Fragment>
    );
};

export default connect(null, {getExercises})(Exercises);