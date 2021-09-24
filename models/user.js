const { model, Schema } = require('mongoose');

const UserSchema = new Schema({
    nombre_apellido: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    domicilio: {
        type: String,
        required: true
    },
    ciudad: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    estado_civil: {
        type: String,
        required: true
    },
    perfil_git: {
        type: String,
        required: true
    },
    equipo: {
        type: String,
        required: true
    },
    deportefav: {
        type: String,
        required: true
    },
    mascota: {
        type: Boolean,
        required: true
    },
    activo: {
        type: Boolean,
        default: true
    }
});


module.exports = model('Alumno', UserSchema);