import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ExerciseList from "../../components/ExerciseList/ExerciseList";
import Workout from "../../components/Workout/Workout";
import Spinner from "../../components/UI/Spinner/Spinner";
import Modal from "../../components/UI/Modal/Modal";
import AddToWorkoutForm from "../../components/AddToWorkoutForm/AddToWorkoutForm";
import NameWorkoutField from "../../components/NameWorkoutField/NameWorkoutField";

import { getExercises, clearExercises } from "../../store/actions/exercises";
import { setModalContent } from "../../store/actions/ui";

import classes from './WorkoutBuilder.module.scss'


const WorkoutBuilder = (props) => {

    useEffect(() => {
        props.getExercises();
        !props.workouts.workoutName ?
            props.setModalContent(<NameWorkoutField/>) :
            props.setModalContent(<AddToWorkoutForm />);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let workoutBody = <Spinner/>;

    if(props.exercises){
        workoutBody = (
            <div className={classes.Workouts}>
                <div className={classes.WorkoutBuilder}>
                    <h2>{props.workouts.workoutName ? props.workouts.workoutName : 'Click an Exercise to Start Building Your Workout'}</h2>
                    <Workout/>
                </div>
                <div className={classes.ExerciseList}>
                    <h2>Available Exercises</h2>
                    <ExerciseList shouldHover={true}/>
                </div>
            </div>
        )
    }

    let modal = null;

    if(props.ui.showModal){
        modal = <Modal/>
    }

    return (
        <React.Fragment>
            {modal}
            {workoutBody}
        </React.Fragment>
    )
};

const mapStateToProps = state => ({
    workouts: state.workouts,
    exercises: state.exercises.exercises,
    ui: state.ui
});

export default connect(
    mapStateToProps,
    {
        getExercises,
        clearExercises,
        setModalContent
    }
)(WorkoutBuilder);