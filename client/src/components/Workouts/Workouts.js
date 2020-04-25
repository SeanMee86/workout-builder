import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from "../UI/Button/Button";

import { setModalContent, showModal, hideModal } from "../../store/actions/ui";
import { deleteUserWorkout } from "../../store/actions/users";

import setWorkoutVars from "../../shared/utilities/setWorkoutVars";

import ListItemClasses from '../../shared/styles/ListItems.module.scss';
import classes from './Workouts.module.scss';

class Workouts extends Component{

    state = {
        showWorkouts: true,
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

    loadExerciseOptions = (exercise) => {
        const content = (
            <div>
                <h2>{exercise.name}</h2>
                <p>{exercise.description}</p>
                <Button text={'Modify Exercise'} clicked={() => {}} />
                <Button text={'Remove Exercise'} clicked={() => {}} />
            </div>
        )
        this.props.setModalContent(content);
        this.props.showModal();
    }

    render() {
        let buttons;
        if(this.props.allWorkouts){
            buttons =
                <div className={classes.Buttons}>
                    <Button
                        text={'View All Workouts'}
                        clicked={() => this.setState({showWorkouts: true})}
                    />
                    <Button
                        text={'Add to My Workouts'}
                        clicked={() => this.props.addToUserWorkouts(this.state.loadedWorkout)}
                        />
                </div>
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
                    <h2>{this.state.loadedWorkout.name}</h2>
                    {
                        this.state.loadedWorkout.workout.map((workout, ind) => {
                            const {reps, time, sets, distance, rest} = setWorkoutVars(workout);
                            return (
                                <div
                                    onClick={() => this.props.userWorkouts ? this.loadExerciseOptions(workout.exercise) : null}
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
                    {buttons}
                </React.Fragment>
            ) : null;
        return(
            <div className={classes.Workouts}>
                {this.state.showWorkouts ? workoutsList : singleWorkout}
            </div>
        )
    }
}

export default connect(
    null,
    {
        showModal,
        setModalContent,
        hideModal,
        deleteUserWorkout
    }
)(Workouts);
