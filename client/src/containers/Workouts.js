import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {getExercises, clearExercises} from "../store/actions/exercises";
import ExerciseList from "../components/ExerciseList/ExerciseList";
import WorkoutBuilder from "../components/WorkoutBuilder/WorkoutBuilder";
import classes from './Workouts.module.scss'
import Spinner from "../components/UI/Spinner/Spinner";

const Workouts = (props) => {

    useEffect(() => {
        props.getExercises();
    }, []);

    let workoutBody = props.exercises ? (
        <div className={classes.Workouts}>
            <div className={classes.WorkoutBuilder}>
                <h2>Your Workout</h2>
                <WorkoutBuilder/>
            </div>
            <div className={classes.ExerciseList}>
                <h2>Available Exercises</h2>
                <ExerciseList/>
            </div>
        </div>
    ) : (<Spinner/>);

    return (
        <React.Fragment>
            {workoutBody}
        </React.Fragment>
    )
};

const mapStateToProps = state => ({
    workouts: state.user.userWorkouts,
    exercises: state.exercises.exercises
});

export default connect(mapStateToProps, {getExercises, clearExercises})(Workouts);