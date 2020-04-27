import React, { Component } from 'react';
import axios from 'axios';

import { TextField, InputLabel, Select, MenuItem } from "@material-ui/core";

import classes from '../../shared/styles/Form.module.scss';

class ExerciseDataForm extends Component{

    state = {
        formData: {
            exerciseType: 'Interval',
            exerciseName: '',
            exerciseDescription: ''
        }
    };

    resetState = () => {
        this.setState({
            formData: {
                exerciseType: 'Interval',
                exerciseName: '',
                exerciseDescription: ''
            }
        })
    };

    onChangeHandler = (e) => {
        const newState = {
            ...this.state,
            formData: {
                ...this.state.formData,
                [e.target.name]: e.target.value
            }
        };
        this.setState(newState);
    };

    onFormSubmitHandler = (e) => {
        e.preventDefault();
        const newExercise = {};
        for(let formProperty in this.state.formData){
            newExercise[formProperty] = this.state.formData[formProperty]
        }

        axios.post('/api/exercises', newExercise)
            .then((res) => {
                this.resetState();
                console.log(res.data);
            }).catch(err => {
                console.log(err);
        })
    };

    render() {
        return (
            <div className={classes.Form}>
                <form
                    onSubmit={this.onFormSubmitHandler}
                    id={'exerciseDataForm'}>
                    {/*<label*/}
                    {/*    htmlFor="exerciseType">Exercise Type:</label>*/}
                    <InputLabel style={{marginBottom: "5px"}} id={'demo-simple-select-label'}>Exercise Type</InputLabel>
                    <Select
                        labelId={'demo-simple-select-label'}
                        onChange={this.onChangeHandler}
                        value={this.state.formData.exerciseType}
                        name="exerciseType"
                        id="demo-simple-select">
                        <MenuItem value="Interval">Interval</MenuItem>
                        <MenuItem value="Timed">Timed</MenuItem>
                        <MenuItem value="Cardio">Cardio</MenuItem>
                    </Select>

                    <TextField
                        onChange={this.onChangeHandler}
                        label={'Exercise Name'}
                        value={this.state.formData.exerciseName}
                        name={'exerciseName'}
                        id={'exerciseName'}
                        type="text"/>

                    <TextField
                        onChange={this.onChangeHandler}
                        label={'Exercise Description'}
                        value={this.state.formData.exerciseDescription}
                        name={'exerciseDescription'}
                        id={'exerciseDescription'}
                        type="text"/>
                    <input
                        style={{marginTop: "20px"}}
                        type="submit"
                        value={'Submit Exercise'}/>
                </form>
            </div>
        )
    }
}

export default ExerciseDataForm;
