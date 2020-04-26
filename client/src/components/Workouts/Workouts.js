import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Button from "../UI/Button/Button";
import UpdateExerciseForm from "../UpdateExerciseForm/UpdateExerciseForm";

import { setModalContent, showModal, hideModal } from "../../store/actions/ui";
import { getUserWorkouts, deleteUserWorkout, updateUserWorkout } from "../../store/actions/users";

import setWorkoutVars from "../../shared/utilities/setWorkoutVars";

import ListItemClasses from '../../shared/styles/ListItems.module.scss';
import classes from './Workouts.module.scss';

class Workouts extends Component{

    state = {
        showWorkouts: true,
        workoutModified: false,
        loadedWorkout: {
            id: null,
            name: '',
            workout: []
        }
    };

    loadOptions = (workout) => {
        const modalContent = (
            <div>
                <Button text={'Load Workout'} clicked={() => this.loadWorkout(workout)} />
                <Button text={'Delete Workout'} clicked={() => this.props.deleteUserWorkout(workout['_id'])} />
            </div>
        );
        this.props.setModalContent(modalContent);
        this.props.showModal();
    };

    loadWorkout = (workout) => {
        this.setState({
            showWorkouts: false,
            loadedWorkout: {
                ...this.state.loadedWorkout,
                id: workout['_id'],
                name: workout.name,
                workout: workout.workout
            }
        });
        this.props.hideModal();
    };

    updateExercise = (exercise, id) => {
        const newExerciseData = {};
        for(let data in exercise){
            newExerciseData[data] = exercise[data].value;
        }
        const newWorkout = this.state.loadedWorkout.workout.map(oldExercise => {
            if(oldExercise._id === id){
                return {
                    ...oldExercise,
                    ...newExerciseData
                };
            }
            return oldExercise;
        })
        this.setState({
            ...this.state,
            loadedWorkout: {
                ...this.state.loadedWorkout,
                workout: [...newWorkout]
            },
            workoutModified: true
        })
        this.props.hideModal();
    }

    showUpdateForm = (exerciseData) => {
        const content = (
            <UpdateExerciseForm {...exerciseData} onClick={this.updateExercise}/>
        );
        this.props.setModalContent(content);
    };

    loadExerciseOptions = (exerciseData) => {
        const content = (
            <div>
                <h2>{exerciseData.exercise.name}</h2>
                <p>{exerciseData.exercise.description}</p>
                <Button text={'Modify Exercise'} clicked={() => this.showUpdateForm(exerciseData)} />
                <Button text={'Remove Exercise'} clicked={() => {}} />
            </div>
        );
        this.props.setModalContent(content);
        this.props.showModal();
    };

    componentWillUnmount() {
        if(this.state.workoutModified){
            this.props.setModalContent(
                <div>
                    Would you like to save changes to your workout?
                    <div>
                        <Button text={'Yes'} clicked={() => {this.props.updateUserWorkout(this.state.loadedWorkout)}} />
                        <Button text={'No'} clicked={() => this.props.hideModal()} />
                    </div>
                </div>
            )
            this.props.showModal();
        }
    }

    render() {
        let addWorkoutButton;
        if(this.props.allWorkouts){
            addWorkoutButton =
                    <Button
                        text={'Add to My Workouts'}
                        clicked={() => this.props.addToUserWorkouts(this.state.loadedWorkout, this.props.history)}
                        />
        }

        const workoutsList =
            (
                <div className={classes.WorkoutsList}>
                    {
                        this.props.workouts.map((workout, ind) => {
                            return (
                                <div
                                    className={`${ListItemClasses.ListItem} ${ListItemClasses.Hover} ${classes.AddMargin}`}
                                    onClick={() => this.props.userWorkouts ? this.loadOptions(workout) : this.loadWorkout(workout)}
                                    key={ind}>
                                    <h2>{workout.name}</h2>
                                    <p>{workout.workout.length} exercise{workout.workout.length !== 1 ? 's' : ''}</p>
                                </div>
                            )
                        })
                    }
                </div>
            );

        const singleWorkout = this.state.loadedWorkout.workout.length ?
            (
                <React.Fragment>
                    <h2 className={classes.WorkoutHeader}>{this.state.loadedWorkout.name}</h2>
                    <div className={classes.Buttons}>
                        <Button text={'Back to Workouts'} clicked={() => this.setState({showWorkouts: true})} />
                        {this.props.allWorkouts ? addWorkoutButton : null}
                    </div>
                    {
                        this.state.loadedWorkout.workout.map((workout, ind) => {
                            const {reps, time, sets, distance, rest} = setWorkoutVars(workout);
                            return (
                                <div
                                    onClick={() => this.props.userWorkouts ? this.loadExerciseOptions(workout) : null}
                                    className={ListItemClasses.ListItem}
                                    key={ind}>
                                    <h2>{workout.exercise.name}</h2>
                                    <p>{workout.exercise.type} workout</p>
                                    {reps}
                                    {time}
                                    {sets}
                                    {distance}
                                    {rest}
                                </div>
                            )
                        })
                    }
                </React.Fragment>
            ) : null;
        return(
            <div className={classes.Workouts}>
                {this.state.showWorkouts ? workoutsList : singleWorkout}
            </div>
        )
    }
}

export default withRouter(connect(
    null,
    {
        showModal,
        setModalContent,
        hideModal,
        deleteUserWorkout,
        getUserWorkouts,
        updateUserWorkout
    }
)(Workouts));
