const ctrlHome = {};
const { findById, findByIdAndUpdate, findByIdAndDelete } = require('../models/User');
const Alumno = require('../models/User');

//Devuelve los usuarios
ctrlHome.rutaGet = async (req, res) => {
    const users = await Alumno.find({ activo: true }) // consulta y devuelve los usuarios activos
    
    // Respuesta del servidor
    res.json(users);
}

// Almacena los usuarios a la base de datos
ctrlHome.rutaPost = async (req, res) => {
    const { nombre_apellido, edad, domicilio, ciudad, telefono, estado_civil, perfil_git, equipo, deportefav, mascota} = req.body;
    const user = new Alumno({nombre_apellido, edad, domicilio, ciudad, telefono, estado_civil, perfil_git, equipo, deportefav, mascota});
    await user.save() 

    res.json({msg: 'Alumno agregado'});
}

module.exports = ctrlHome;