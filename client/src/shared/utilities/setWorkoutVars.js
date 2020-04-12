import React from "react";

export const setWorkoutVars = (workout) => {
    const reps = workout.repetitions ? (<p>Reps: {workout.repetitions}</p>): null;
    const sets = workout.sets ? (<p>Sets: {workout.sets}</p>) : null;
    const rest = workout.rest ? (<p>Rest: {workout.rest}</p>): null;
    const time = workout.time ? (<p>Time: {workout.time}</p>) : null;
    const distance = workout.distance ? (<p>Distance: {workout.distance}</p>) : null;
    return {
        reps,
        sets,
        rest,
        time,
        distance
    }
};