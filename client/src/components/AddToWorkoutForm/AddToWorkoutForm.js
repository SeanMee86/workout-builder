import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from "../UI/Button/Button";
import TextField from "@material-ui/core/TextField";

import { addToWorkout } from "../../store/actions/workouts";
import { hideModal } from "../../store/actions/ui";

import { buildFormFields } from "../../shared/utilities/buildFormFields";

import classes from './AddToWorkoutForm.module.scss';

class AddToWorkoutForm extends Component {

    state = {
        additionalFields: {}
    };

    componentDidMount() {
        this.setFieldsState(this.props.exercise.type);
    }

    setFieldsState = (type) => {
        switch(type){
            case 'Interval':
                this.setState({
                    additionalFields: {
                        repetitions: {
                            type: 'number',
                            value: 0
                        },
                        sets: {
                            type: 'number',
                            value: 0
                        },
                        rest: {
                            type: 'text',
                            value: '',
                        }
                    }
                });
                break;
            case 'Cardio':
                this.setState({
                    additionalFields: {
                        time: {
                            type: 'text',
                            value: ''
                        },
                        distance: {
                            type: 'text',
                            value: ''
                        }
                    }
                });
                break;
            case 'Timed':
                this.setState({
                    additionalFields: {
                        time: {
                            type: 'text',
                            value: ''
                        },
                        sets: {
                            type: 'number',
                            value: 0
                        },
                        rest: {
                            type: 'text',
                            value: '',
                        }
                    }
                });
                break;
            default: return this.state;
        }
    };

    onChangeHandler = (e) => {
        this.setState({
            additionalFields: {
                ...this.state.additionalFields,
                [e.target.name]: {
                    ...this.state.additionalFields[e.target.name],
                    value: e.target.value
                }
            }
        })
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        const fieldValues = {};
        for(let field in this.state.additionalFields){
            fieldValues[field] = this.state.additionalFields[field].value
        }
        this.props.addToWorkout({
            exercise: {
                ...this.props.exercise
            },
            ...fieldValues
        });
        this.props.hideModal();
    };

    render() {

        const formFields = buildFormFields(this.state.additionalFields);

        let form =
            formFields.map(field => (
                <div className={classes.Field} key={field.label}>
                    <TextField
                        name={field.label.toLowerCase()}
                        label={field.label}
                        onChange={this.onChangeHandler}
                        type={field.type}
                        value={field.value}/>
                </div>
            ));

        return(
            <React.Fragment>

                <div className={classes.GenInfo}>
                    <h2>{this.props.exercise.name}</h2>
                    <p>{this.props.exercise.type} Workout</p>
                </div>

                <form method={'post'} className={classes.Form}>
                    {form}
                    <div className={classes.ButtonContainer}>
                        <Button clicked={(event) => this.onSubmitForm(event)} text={'Add Exercise To Workout'}/>
                    </div>
                </form>

            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    exercise: state.exercises.exerciseToAdd
});

export default connect(
    mapStateToProps,
    {
        addToWorkout,
        hideModal
    }
)(AddToWorkoutForm);
