import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getWorkouts} from "../store/actions/workouts";

class Workouts extends Component{

    state = {
        showWorkouts: true
    };

    componentDidMount() {
        this.props.getWorkouts();
    }

    render() {
        const workouts = this.props.workouts.map((workout, ind) => {
            return (
                <div onClick={() => this.setState({showWorkouts: false})} key={ind}>
                    <h2>{workout.name}</h2>
                    <p>{workout.workout.length} exercise{workout.workout.length !== 1 ? 's' : ''}</p>
                </div>
            )
        });
        return(
            <div>
                {this.state.showWorkouts ? workouts : null}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    workouts: state.workouts.workouts
});

export default connect(mapStateToProps, {getWorkouts})(Workouts);