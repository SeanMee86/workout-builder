const { model } = require('mongoose');
const userSchema = require('../../../models/User');
const User = model('user', userSchema);

module.exports = {
    getUsers: (res) => {
        return User.find({}, (err, docs) => {
            if(!err){
                res.send(docs);
            }else {
                throw err;
            }
        })
    },
    getUserWorkouts: (req, res) => {
        const { id: userId } = req.user;
        User.findById(userId, (err, user) => {
            if(err){
                return res.json(err);
            }
            res.send(user.workouts);
        })
    }
};
