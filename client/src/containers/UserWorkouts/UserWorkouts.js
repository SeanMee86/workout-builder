import React, { Component } from 'react';
import { connect } from 'react-redux';

import Workouts from "../../components/Workouts/Workouts";
import Spinner from "../../components/UI/Spinner/Spinner";

import { getUserWorkouts } from "../../store/actions/users";

class UserWorkouts extends Component {

    componentDidMount() {
        if(!this.props.userWorkouts) {
            this.props.getUserWorkouts();
        }
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
                <h2>{this.props.userName}'s Workouts</h2>
                {workouts}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    userWorkouts: state.user.userWorkouts,
    userName: state.user.userName
});

export default connect(
    mapStateToProps,
    {
        getUserWorkouts
    }
)(UserWorkouts);
