const { model, Schema } = require('mongoose');
//estructura de los datos
const UserSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true
    },
    activo:{
        type: Boolean,
        default: true
    }
});


module.exports = model('Usuario', UserSchema);