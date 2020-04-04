const { model } = require('mongoose');
const userSchema = require('../../models/User');
const User = model('user', userSchema);

module.exports = (response) => {
    return User.find({}, (err, docs) => {
        if(!err){
            response.send(docs);
        }else {
            throw err;
        }
    })
};