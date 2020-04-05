import React from 'react';
import { connect } from 'react-redux';
import ExerciseListItem from "../ExerciseListItem/ExerciseListItem";
import classes from './ExersiceList.module.scss';

const ExerciseList = (props) => {
    return (
        <div className={classes.List}>
            {props.exercises ? props.exercises.map(exercise => (
                <ExerciseListItem
                    key={exercise["_id"]}
                    exerciseName={exercise.name}
                    exerciseType={exercise.type}
                    exerciseDescription={exercise.description}/>
            )) : null}
        </div>
    )
};

const mapStateToProps = state => ({
    exercises: state.exercises.exercises
});

export default connect(mapStateToProps)(ExerciseList);