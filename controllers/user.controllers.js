const ctrlHome = {};
const { findById, findByIdAndUpdate, findByIdAndDelete } = require('../models/User');
    const Usuario = require('../models/User');

//Devuelve los usuarios
ctrlHome.rutaGet = async (req, res) => {
    const Usuario = await Usuario.find({ activo: true }) // consulta y devuelve los usuarios activos
    
    // Respuesta del servidor
    res.json(Usuario);
}

// Almacena los usuarios a la base de datos
ctrlHome.rutaPost = async (req, res) => {
    const { email, password} = req.body;
    const Usuario = new Usuario({ email, password});
    await Usuario.save() 

    res.json({msg: 'Usuario Agregado'});
}

ctrlHome.rutaDelete = async (req, res)=>{

const { id }= req.body;

try {
    await Usuario.findByIdAndDelete(id);

    return res.json({
        msg:"User demoved correctly"
    })
} catch (error) {
    console.log("error al eliminar usuario:", error)
}

}

ctrlHome.rutaPut = async (req, res)=>{

    const { id } = req.params;
    let {email, password, ...restoDeDatos}= req.body


    if(password){

    }

    try {
        const Usuario = await Usuario.findByIdAndUpdate(id, {email, password});
        return res.json(Usuario)
    } catch (error) {
        console.log(`Error to update user: ${error}`)
    }

}


module.exports = ctrlHome;