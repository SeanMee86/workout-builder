import React, { Component } from 'react';
import axios from 'axios';
import classes from './ExerciseFormData.module.scss';

class ExerciseDataForm extends Component{

    state = {
        formData: {
            exerciseType: 'interval',
            exerciseName: '',
            exerciseDescription: ''
        }
    };

    resetState = () => {
        this.setState({
            formData: {
                exerciseType: 'interval',
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
                    <label
                        htmlFor="exerciseType">Exercise Type:</label>
                    <select
                        onChange={this.onChangeHandler}
                        value={this.state.formData.exerciseType}
                        name="exerciseType"
                        id="exerciseType">
                        <option value="interval">Interval</option>
                        <option value="timed">Timed</option>
                    </select>
                    <label
                        htmlFor="exerciseName">Exercise Name:</label>
                    <input
                        onChange={this.onChangeHandler}
                        value={this.state.formData.exerciseName}
                        name={'exerciseName'}
                        id={'exerciseName'}
                        type="text"/>
                    <label
                        htmlFor="exerciseDescription">Exercise Description:</label>
                    <input
                        onChange={this.onChangeHandler}
                        value={this.state.formData.exerciseDescription}
                        name={'exerciseDescription'}
                        id={'exerciseDescription'}
                        type="text"/>
                    <input
                        type="submit"
                        value={'Submit Exercise'}/>
                </form>
            </div>
        )
    }
}

export default ExerciseDataForm;