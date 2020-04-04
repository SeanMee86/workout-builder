import React, {useState} from 'react';
import {getUserWorkouts} from "../store/actions/workouts";
import {connect} from 'react-redux';

import ExerciseDataForm from "../components/ExerciseDataForm";

const Workouts = (props) => {

    const [workoutRegimenInfo, setWorkoutRegimenInfo] = useState([]);

    const getWorkoutInfo = (workoutInfo) => {
        setWorkoutRegimenInfo(workoutInfo.map(info => (
            <div key={info.name}>
                <h2>{info.name}</h2>
                <hr/>
                <p>{info.type}</p>
                <p>{info.description}</p>
                <p>Rest: {info.rest}</p>
                <p>Repetitions: {info.repetitions}</p>
            </div>
        )))
    };

    const workoutRegimens = props.workouts ? (
        props.workouts.map(workout => (
            <div key={workout.name} onClick={() => getWorkoutInfo(workout.workout)}>{workout.name}</div>
        ))
    ) : null;

    return (
        <div>
            <button onClick={props.getUserWorkouts}>Get Workouts</button>
            {workoutRegimens}
            {workoutRegimenInfo}
            <ExerciseDataForm />
        </div>
    )
};

const mapStateToProps = state => ({
    workouts: state.user.userWorkouts
});

export default connect(mapStateToProps, {getUserWorkouts})(Workouts);