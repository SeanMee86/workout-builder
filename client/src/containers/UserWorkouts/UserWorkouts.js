import React, { Component } from 'react';
import { connect } from 'react-redux';

import Workouts from "../../components/Workouts/Workouts";
import Spinner from "../../components/UI/Spinner/Spinner";

import { getUserWorkouts } from "../../store/actions/users";

class UserWorkouts extends Component {

    componentDidMount() {
        this.props.getUserWorkouts();
    }

    render() {
        let workouts = (<Spinner/>);
        if(this.props.userWorkouts){
            workouts =(
                <Workouts
                userWorkouts
                workouts={this.props.userWorkouts} />
            )
        }
        return (
            <React.Fragment>
                {workouts}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    userWorkouts: state.user.userWorkouts
});

export default connect(
    mapStateToProps,
    {
        getUserWorkouts
    }
)(UserWorkouts);