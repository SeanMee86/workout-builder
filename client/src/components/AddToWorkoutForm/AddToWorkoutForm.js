import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToWorkout } from "../../store/actions/workouts";
import classes from './AddToWorkoutForm.module.scss';
import Button from "../UI/Button/Button";

class AddToWorkoutForm extends Component {

    state = {
        additionalFields: {}
    };

    componentDidMount() {
        this.buildNewFields(this.props.exercise.type);
    }

    buildNewFields = (type) => {
        switch(type){
            case 'Interval':
                this.setState({
                    additionalFields: {
                        sets: {
                            type: 'number',
                            value: 0
                        },
                        rest: {
                            type: 'text',
                            value: '',
                        },
                        repetitions: {
                            type: 'number',
                            value: 0
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
                        rest: {
                            type: 'text',
                            value: '',
                        },
                        repetitions: {
                            type: 'number',
                            value: 0
                        }
                    }
                })
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

    onSubmitHandler = (e) => {
        e.preventDefault();
        this.props.addToWorkout();
    };

    render() {
        let formFields = [];
        for(let field in this.state.additionalFields){
            const firstLetter = field.charAt(0).toUpperCase();
            const newLabel = firstLetter + field.slice(1, field.length);
            formFields.push({
                label: newLabel,
                type: this.state.additionalFields[field].type,
                value: this.state.additionalFields[field].value
            })
        }
        console.log(formFields);
        return(
            <div className={classes.FormContainer}>
                <div className={classes.GenInfo}>
                    <h2>{this.props.exercise.name}</h2>
                    <p>{this.props.exercise.type} Workout</p>
                </div>
                <form className={classes.Form}>
                    {formFields.map(field => (
                        <div className={classes.Field} key={field.label}>
                            <label>{field.label}:</label>
                            <input
                                name={field.label.toLowerCase()}
                                onChange={this.onChangeHandler}
                                type={field.type}
                                value={field.value}/>
                        </div>
                    ))}
                    <div className={classes.ButtonContainer}>
                        <Button text={'Add Exercise To Workout'}/>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    exercise: state.exercises.exerciseToAdd
});

export default connect(mapStateToProps, {addToWorkout})(AddToWorkoutForm);