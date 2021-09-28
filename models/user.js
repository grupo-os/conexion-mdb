const { model, Schema } = require('mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    pasword: {
        type: String,
        required: true
    }
});


module.exports = model('Usuario', UserSchema);