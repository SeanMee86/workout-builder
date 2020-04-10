import React, {useState} from 'react';
import { connect } from 'react-redux';
import Button from "../UI/Button/Button";
import {nameWorkout} from "../../store/actions/workouts";
import classes from './NameWorkoutField.module.scss';

const NameWorkoutField = (props) => {
    const [workoutName, setWorkoutName] = useState('');

    const onChangeHandler = (e) => {
        setWorkoutName(e.target.value);
    };

    const submitForm = (e) => {
        e.preventDefault();
        props.nameWorkout(workoutName);
    };

    return(
        <div className={classes.FieldContainer}>
            <form method={'post'}>
                <label htmlFor={'workoutName'}>Name Your Workout</label>
                <input onChange={onChangeHandler} id={'workoutName'} name={'workoutName'} type="text"/>
                <Button clicked={(e) => submitForm(e)} text={'Enter Name'}/>
            </form>
        </div>
    )
};

export default connect(null, {nameWorkout})(NameWorkoutField);