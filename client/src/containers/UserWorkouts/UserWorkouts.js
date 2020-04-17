import React, { Component } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

class UserWorkouts extends Component {

    componentDidMount() {
        const userId = jwt_decode(localStorage.jwtToken).id;
        const data = { userId };
        axios.post('/api/users/getworkouts', data)
            .then(res => {
                console.log(res);
            })
    }

    render() {
        return (
            <div>
                User Workouts
            </div>
        );
    }
}

export default UserWorkouts;