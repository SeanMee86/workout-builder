import React, { Component } from 'react';

class UpdateExerciseForm extends Component {

    state = {
        fields: {}
    };

    componentDidMount() {
        console.log(this.props);
        switch(this.props.exercise.type){
            case 'Interval':
                this.setState({
                    ...this.state,
                    fields: {
                        ...this.state.fields,
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
                    ...this.state,
                    fields: {
                        ...this.state.fields,
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
            default: this.setState(...this.state)
        }
    }

    render() {
        return(
            <div>
                Hi
            </div>
        )
    }
}

export default UpdateExerciseForm;
