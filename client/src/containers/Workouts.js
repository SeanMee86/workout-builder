import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getWorkouts} from "../store/actions/workouts";

class Workouts extends Component{

    componentDidMount() {
        this.props.getWorkouts();
    }

    render() {
        return(
            <div>
                Hello
            </div>
        )
    }
}

export default connect(null, {getWorkouts})(Workouts);