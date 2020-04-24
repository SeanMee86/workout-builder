import React, { Component } from 'react';
import { connect } from 'react-redux';
import jwt_decode from "jwt-decode";
import axios from "axios";

import Workouts from "../../components/Workouts/Workouts";
import Spinner from "../../components/UI/Spinner/Spinner";

import { getAllWorkouts } from "../../store/actions/workouts";
import { setModalContent, showModal } from "../../store/actions/ui";

class AllWorkouts extends Component{

    componentDidMount() {
        this.props.getAllWorkouts();
    }

    addToMyWorkouts = (workoutData) => {
        const data = {
            userId: jwt_decode(localStorage.jwtToken).id,
            workoutData
        };
        axios.post('/api/users/workouts', data)
            .then(res => {
                const content = (
                    <div>
                        {res.data.name ?
                            `<strong>${res.data.name}</strong> has been added to your workouts!` :
                            res.data
                        }
                    </div>
                );
                this.props.setModalContent(content);
                this.props.showModal();
            })
            .catch(err => console.log(err))
    };

    render() {
        let workouts = <Spinner/>;
        if(this.props.workouts){
            workouts =
                <Workouts
                    allWorkouts
                    addToUserWorkouts={this.addToMyWorkouts}
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
        setModalContent
    }
)(AllWorkouts);
