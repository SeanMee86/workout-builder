import React, { Component } from 'react';

import Button from "../UI/Button/Button";

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

    loadWorkout = (workout) => {
        this.setState({
            showWorkouts: false,
            loadedWorkout: {
                ...this.state.loadedWorkout,
                id: workout['_id'],
                name: workout.name,
                workout: workout.workout
            }
        })
    };

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

        const workouts =
            (<div className={classes.WorkoutsList}>
                {this.props.workouts.map((workout, ind) => {
                    return (
                        <div
                            className={`${ListItemClasses.ListItem} ${ListItemClasses.Hover} ${classes.AddMargin}`}
                            onClick={() => this.loadWorkout(workout)}
                            key={ind}>
                            <h2>{workout.name}</h2>
                            <p>{workout.workout.length} exercise{workout.workout.length !== 1 ? 's' : ''}</p>
                        </div>
                    )})
                }</div>);

        const workout = this.state.loadedWorkout.workout.length ?
            (<React.Fragment>
                {this.state.loadedWorkout.workout.map((workout, ind) => {
                    const {reps, time, sets, distance, rest} = setWorkoutVars(workout);
                    return (
                        <div className={ListItemClasses.ListItem} key={ind}>
                            <h2>{workout.exercise.name}</h2>
                            <p>{workout.exercise.type} workout</p>
                            {reps}
                            {time}
                            {sets}
                            {distance}
                            {rest}
                        </div>
                    )
                })}
                {buttons}
            </React.Fragment>) : null;
        return(
            <div className={classes.Workouts}>
                {this.state.showWorkouts ? workouts : workout}
            </div>
        )
    }
}

export default Workouts;
