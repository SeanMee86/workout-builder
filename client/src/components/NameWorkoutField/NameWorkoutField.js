import React, {useState} from 'react';
import { connect } from 'react-redux';

import Button from "../UI/Button/Button";
import AddToWorkoutForm from "../AddToWorkoutForm/AddToWorkoutForm";

import { nameWorkout } from "../../store/actions/workouts";
import { setModalContent, hideModal } from "../../store/actions/ui";

import classes from './NameWorkoutField.module.scss';

const NameWorkoutField = (props) => {

    const [workoutName, setWorkoutName] = useState('');

    const onChangeHandler = (e) => {
        setWorkoutName(e.target.value);
    };

    const submitForm = (e) => {
        e.preventDefault();
        props.nameWorkout(workoutName);
        if(props.shouldContinue) {
            props.setModalContent(<AddToWorkoutForm/>);
        }else{
            props.hideModal();
        }
    };

    return(
        <div className={classes.FieldContainer}>
            <label htmlFor={'workoutName'}><h2>Name Your Workout</h2></label>
            <form method={'post'}>
                <input onChange={onChangeHandler} id={'workoutName'} name={'workoutName'} type="text"/>
                <Button clicked={(e) => submitForm(e)} text={'Enter Name'}/>
            </form>
        </div>
    )
};


export default connect(
    null,
    {
        nameWorkout,
        setModalContent,
        hideModal
    }
)(NameWorkoutField);