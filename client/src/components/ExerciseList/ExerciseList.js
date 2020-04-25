import React from 'react';
import { connect } from 'react-redux';

import ExerciseListItem from "./ExerciseListItem/ExerciseListItem";

import classes from './ExersiceList.module.scss';
import Spinner from "../UI/Spinner/Spinner";

const ExerciseList = (props) => {

    let exerciseList = <Spinner/>;
    if(props.exercises) {
        exerciseList =
            (
                <div className={classes.List}>
                    {props.exercises.map(exercise => (
                        <ExerciseListItem
                            clickable={props.clickableItems}
                            key={exercise["_id"]}
                            id={exercise["_id"]}
                            exerciseName={exercise.name}
                            exerciseType={exercise.type}
                            exerciseDescription={exercise.description}/>
                    ))}
                </div>
            )
    }

    return (
        <React.Fragment>
            {exerciseList}
        </React.Fragment>
    )
};

const mapStateToProps = state => ({
    exercises: state.exercises.exercises
});

export default connect(mapStateToProps)(ExerciseList);
