import React, { Component } from 'react';
import { connect } from 'react-redux';

import ExerciseList from "../../components/ExerciseList/ExerciseList";
import Workout from "../../components/Workout/Workout";
import Spinner from "../../components/UI/Spinner/Spinner";
import NameWorkoutField from "../../components/NameWorkoutField/NameWorkoutField";

import { getExercises, clearExercises } from "../../store/actions/exercises";
import { setModalContent, showModal } from "../../store/actions/ui";

import classes from './WorkoutBuilder.module.scss'


class WorkoutBuilder extends Component {

    componentDidMount() {
        this.props.getExercises();
    }

    updateWorkoutName = () => {
        if(this.props.workouts.workoutName){
            this.props.setModalContent(<NameWorkoutField/>);
            this.props.showModal();
        }
    };

    render() {
        let workoutBody = <Spinner/>;

        if(this.props.exercises){
            workoutBody = (
                <div className={classes.Workouts}>
                    <div className={classes.WorkoutBuilder}>
                        <h2 onClick={this.updateWorkoutName}>{this.props.workouts.workoutName ? this.props.workouts.workoutName : 'Click an Exercise to Start Building Your Workout'}</h2>
                        <Workout/>
                    </div>
                    <div className={classes.ExerciseList}>
                        <h2>Available Exercises</h2>
                        <ExerciseList clickableItems/>
                    </div>
                </div>
            )
        }

        return (
            <React.Fragment>
                {workoutBody}
            </React.Fragment>
        )
    }
}

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
        setModalContent,
        showModal
    }
)(WorkoutBuilder);