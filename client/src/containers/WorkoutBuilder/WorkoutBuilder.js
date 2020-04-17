import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {getExercises, clearExercises} from "../../store/actions/exercises";
import ExerciseList from "../../components/ExerciseList/ExerciseList";
import Workout from "../../components/Workout/Workout";
import classes from './WorkoutBuilder.module.scss'
import Spinner from "../../components/UI/Spinner/Spinner";
import Modal from "../../components/UI/Modal/Modal";
import AddToWorkoutForm from "../../components/AddToWorkoutForm/AddToWorkoutForm";
import NameWorkoutField from "../../components/NameWorkoutField/NameWorkoutField";

const WorkoutBuilder = (props) => {

    useEffect(() => {
        props.getExercises();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let workoutBody = props.exercises ? (
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
    ) : (<Spinner/>);

    let form = props.workouts.workoutName ? <AddToWorkoutForm /> : <NameWorkoutField/>;

    let modal = props.showModal ? (
        <Modal>
            {form}
        </Modal>
    ) : null;

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
    showModal: state.ui.showModal
});

export default connect(mapStateToProps, {getExercises, clearExercises})(WorkoutBuilder);