import React, { Component } from 'react';
import classes from '../../shared/styles/ListItems.module.scss'
import workoutsClasses from './Workouts.module.scss'
import Button from "../UI/Button/Button";
import {setWorkoutVars} from "../../shared/utilities/setWorkoutVars";

class Workouts extends Component{

    state = {
        showWorkouts: true,
        loadedWorkout: {
            id: null,
            workout: []
        }
    };

    loadWorkout = (workout) => {
        this.setState({
            showWorkouts: false,
            loadedWorkout: {
                ...this.state.loadedWorkout,
                id: workout['_id'],
                workout: workout.workout
            }
        })
    };

    render() {
        let buttons;
        if(this.props.allWorkouts){
            buttons =
                <React.Fragment>
                    <Button
                        text={'Get Workouts'}
                        clicked={() => this.setState({showWorkouts: true})}
                    />
                    <Button
                        text={'Add to My Workouts'}
                        clicked={() => this.props.addToUserWorkouts(this.state.loadedWorkout.id)}
                        />
                </React.Fragment>
        }

        const workouts =
            (<div className={workoutsClasses.WorkoutsList}>
                {this.props.workouts.map((workout, ind) => {
                    return (
                        <div
                            className={`${classes.ListItem} ${classes.Hover} ${workoutsClasses.AddMargin}`}
                            onClick={() => this.loadWorkout(workout)}
                            key={ind}>
                            <h2>{workout.name}</h2>
                            <p>{workout.workout.length} exercise{workout.workout.length !== 1 ? 's' : ''}</p>
                        </div>
                    )})
                }</div>);

        const workout = this.state.loadedWorkout.workout.length ?
            (<div>
                {this.state.loadedWorkout.workout.map((workout, ind) => {
                    const {reps, time, sets, distance, rest} = setWorkoutVars(workout);
                    return (
                        <div className={classes.ListItem} key={ind}>
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
            </div>) : null;
        return(
            <div>
                {this.state.showWorkouts ?
                    workouts :
                    workout}
            </div>
        )
    }
}

export default Workouts;