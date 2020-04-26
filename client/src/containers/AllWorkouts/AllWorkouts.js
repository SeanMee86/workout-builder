import React, { Component } from 'react';
import { connect } from 'react-redux';

import Workouts from "../../components/Workouts/Workouts";
import Spinner from "../../components/UI/Spinner/Spinner";

import { getAllWorkouts } from "../../store/actions/workouts";
import { setModalContent, showModal } from "../../store/actions/ui";
import { getUserWorkouts, addToUserWorkouts } from "../../store/actions/users";

class AllWorkouts extends Component{

    componentDidMount() {
        this.props.getAllWorkouts();
    }

    render() {
        let workouts = <Spinner/>;
        if(this.props.workouts){
            workouts =
                <Workouts
                    allWorkouts
                    addToUserWorkouts={this.props.addToUserWorkouts}
                    workouts={this.props.workouts} />
        }
        return(
            <React.Fragment>
                {workouts}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    workouts: state.workouts.workouts
});

export default connect(
    mapStateToProps,
    {
        getAllWorkouts,
        showModal,
        setModalContent,
        getUserWorkouts,
        addToUserWorkouts
    }
)(AllWorkouts);
