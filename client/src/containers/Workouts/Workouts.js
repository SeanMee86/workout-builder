import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getWorkouts} from "../../store/actions/workouts";
import classes from '../../shared/styles/ListItems.module.scss'
import workoutsClasses from './Workouts.module.scss'
import Button from "../../components/UI/Button/Button";
import {setWorkoutVars} from "../../shared/utilities/setWorkoutVars";

class Workouts extends Component{

    state = {
        showWorkouts: true,
        loadedWorkout: []
    };

    componentDidMount() {
        this.props.getWorkouts();
    }

    loadWorkout = (workout) => {
        this.setState({
            showWorkouts: false,
            loadedWorkout: workout
        })
    };

    render() {
        const workouts =
            (<div className={workoutsClasses.WorkoutsList}>
                {this.props.workouts.map((workout, ind) => {
                    return (
                        <div
                            className={`${classes.ListItem} ${classes.Hover} ${workoutsClasses.AddMargin}`}
                            onClick={() => this.loadWorkout(workout.workout)}
                            key={ind}>
                            <h2>{workout.name}</h2>
                            <p>{workout.workout.length} exercise{workout.workout.length !== 1 ? 's' : ''}</p>
                        </div>
                    )})
                }</div>);

        const workout = this.state.loadedWorkout.length ?
            (<div>
                {this.state.loadedWorkout.map((workout, ind) => {
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
                <Button
                    text={'Get Workouts'}
                    clicked={() => this.setState({showWorkouts: true})}
                />
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

const mapStateToProps = state => ({
    workouts: state.workouts.workouts
});

export default connect(mapStateToProps, {getWorkouts})(Workouts);