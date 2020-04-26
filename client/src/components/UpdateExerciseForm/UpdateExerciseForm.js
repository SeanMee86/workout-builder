import React, { Component } from 'react';
import classes from "../AddToWorkoutForm/AddToWorkoutForm.module.scss";
import Button from "../UI/Button/Button";

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
        let formFields = [];
        for(let field in this.state.fields){
            const firstLetter = field.charAt(0).toUpperCase();
            const newLabel = firstLetter + field.slice(1, field.length);
            formFields.push({
                label: newLabel,
                type: this.state.fields[field].type,
                value: this.state.fields[field].value
            })
        }

        let form =
            formFields.map(field => (
                <div className={classes.Field} key={field.label}>
                    <label>{field.label}:</label>
                    <input
                        name={field.label.toLowerCase()}
                        onChange={this.onChangeHandler}
                        type={field.type}
                        value={field.value}/>
                </div>
            ));
        return(
            <div>
                <form
                    method={'post'}
                    className={classes.Form}
                    onSubmit={(e) => this.onSubmit(e)}>
                    {form}
                    <Button clicked={() => this.props.onClick(this.state.fields, this.props._id)} text={'Update Exercise'}/>
                </form>
            </div>
        )
    }
}

export default UpdateExerciseForm;
