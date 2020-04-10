import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {getExercises, clearExercises} from "../store/actions/exercises";
import ExerciseList from "../components/ExerciseList/ExerciseList";
import WorkoutBuilder from "../components/WorkoutBuilder/WorkoutBuilder";
import classes from './Workouts.module.scss'
import Spinner from "../components/UI/Spinner/Spinner";
import Modal from "../components/UI/Modal/Modal";
import AddToWorkoutForm from "../components/AddToWorkoutForm/AddToWorkoutForm";
import NameWorkoutField from "../components/NameWorkoutField/NameWorkoutField";

const Workouts = (props) => {

    useEffect(() => {
        props.getExercises();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let workoutBody = props.exercises ? (
        <div className={classes.Workouts}>
            <div className={classes.WorkoutBuilder}>
                <h2>{props.workouts.workoutName ? props.workouts.workoutName : 'Click an Exercise to Start Building Your Workout'}</h2>
                <WorkoutBuilder/>
            </div>
            <div className={classes.ExerciseList}>
                <h2>Available Exercises</h2>
                <ExerciseList shouldHover={true}/>
            </div>
        </div>
    ) : (<Spinner/>);

    let form = props.workouts.workoutName ? <AddToWorkoutForm /> : <NameWorkoutField/>;

    let modal = props.workouts.showModal ? (
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
    exercises: state.exercises.exercises
});

export default connect(mapStateToProps, {getExercises, clearExercises})(Workouts);