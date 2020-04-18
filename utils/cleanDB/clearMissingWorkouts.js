module.exports = (workoutIdArray, Workout, user) => {
    workoutIdArray.forEach(id => {
        Workout.findById(id, (err, docs) => {
            if(err){
                console.log(err);
            }else if(!docs){
                user.workouts = user.workouts.filter(workout => workout.workoutID !== id);
                user.save();
            }
        })
    });
};