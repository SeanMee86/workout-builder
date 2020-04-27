import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Button from "../UI/Button/Button";
import TextField from "@material-ui/core/TextField";
import AddToWorkoutForm from "../AddToWorkoutForm/AddToWorkoutForm";

import { nameWorkout } from "../../store/actions/workouts";
import { setModalContent, hideModal } from "../../store/actions/ui";

import classes from './NameWorkoutField.module.scss';

const NameWorkoutField = (props) => {

    useEffect(() => {
        if(props.workoutName){
            setWorkoutName(props.workoutName)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
        <React.Fragment>
            <h2 className={classes.FormHeader}>Name Your Workout</h2>
            <form
                className={classes.NameWorkoutForm}
                method={'post'}>
                <TextField
                    onChange={onChangeHandler}
                    id={'workoutName'}
                    label={'Workout Name'}
                    value={workoutName}
                    name={'workoutName'}
                    type="text"/>
                <Button
                    clicked={(e) => submitForm(e)}
                    text={'Enter Name'}/>
            </form>
        </React.Fragment>
    )
};

const mapStateToProps = state => ({
    workoutName: state.workouts.workoutName
});


export default connect(
    mapStateToProps,
    {
        nameWorkout,
        setModalContent,
        hideModal
    }
)(NameWorkoutField);
