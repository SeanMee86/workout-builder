import React, { Component } from 'react';

import Button from "../UI/Button/Button";
import TextField from "@material-ui/core/TextField";

import { buildFormFields } from "../../shared/utilities/buildFormFields";

import classes from "../AddToWorkoutForm/AddToWorkoutForm.module.scss";

class UpdateExerciseForm extends Component {

    state = {
        fields: {}
    };

    componentDidMount() {
        switch(this.props.exercise.type){
            case 'Interval':
                this.setState({
                    fields: {
                        repetitions: {
                            type: 'number',
                            value: this.props.repetitions
                        },
                        sets: {
                            type: 'number',
                            value: this.props.sets
                        },
                        rest: {
                            type: 'text',
                            value: this.props.rest
                        }
                    }
                });
                break;
            case 'Cardio':
                this.setState({
                    fields: {
                        time: {
                            type: 'text',
                            value: this.props.time
                        },
                        distance: {
                            type: 'text',
                            value: this.props.distance
                        }
                    }
                });
                break;
            case 'Timed':
                this.setState({
                    fields: {
                        time: {
                            type: 'text',
                            value: this.props.time
                        },
                        sets: {
                            type: 'number',
                            value: this.props.sets
                        },
                        rest: {
                            type: 'text',
                            value: this.props.rest
                        }
                    }
                });
                break;
            default: this.setState(...this.state)
        }
    }

    onChangeHandler = (e) => {
        this.setState({
            fields: {
                ...this.state.fields,
                [e.target.name]: {
                    ...this.state.fields[e.target.name],
                    value: e.target.value
                }
            }
        })
    };

    onSubmit = (e) => e.preventDefault();

    render() {
        const formFields = buildFormFields(this.state.fields);

        let form =
            <div>
                {formFields.map(field => (
                        <TextField
                            key={field.label}
                            label={field.label}
                            className={classes.Field}
                            name={field.label.toLowerCase()}
                            onChange={this.onChangeHandler}
                            type={field.type}
                            value={field.value}/>
                ))}
            </div>
        return(
            <div style={{
                display: "flex",
                width: "100%",
                textAlign: "center",
                justifyContent: "center"
            }}>
                <form
                    style={{
                        position: "relative",
                        top: "-15px"
                    }}
                    method={'post'}
                    className={classes.Form}
                    onSubmit={(e) => this.onSubmit(e)}>
                    {form}
                    <div className={classes.ButtonContainer}>
                        <Button
                            clicked={() => this.props.onClick(this.state.fields, this.props._id)}
                            text={'Update Exercise'}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default UpdateExerciseForm;
