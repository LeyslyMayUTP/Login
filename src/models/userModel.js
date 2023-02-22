const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const UserShema = new Schema({
    username: String,
    email: String,
    password: String
});

UserShema.methods.encryptPassword = async(password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

UserShema.methods.validatePassword = function(password){
    return bcrypt.compare(password, this.password);
};

module.exports = model('User', UserShema)