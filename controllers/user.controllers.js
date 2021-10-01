const ctrlHome = {};
const Usuario = require('../models/user');
const {generate_jwt} = require('../helpers/generar_jwt')

//Devuelve los usuarios
ctrlHome.rutaGet = async (req, res) => {

    const usuario = await Usuario.find({ activo: true }) // consulta y devuelve los usuarios activos
    
    // Respuesta del servidor
    res.json(usuario);
};

// Almacena los usuarios a la base de datos
ctrlHome.rutaPost = async (req, res) => {
    
    const { email, password, role} = req.body;
    
    const usuario = new Usuario({ email, password, role });
    
    await usuario.save() 

    res.json({msg: 'Usuario Agregado'});

};

ctrlHome.rutaLogin = async (req, res) => {

    const { email, password} = req.body;

    const usuario = await Usuario.findOne({email, password});
   
   
    //Si no encuentra el usuario
    if(!usuario){
        return res.status(401).json({
            msg: "Usuario no existe"
        })
    };

    //verificamos si es un usuario activo
    
    if(!usuario.activo){
        res.status(401).json({
            //Si no lo encuentra activo al usuario pasa
            msg: "Usuario no existe"
        })
    }

    //Si lo encuentra

    const token = await generate_jwt(usuario.id); 
    
    //Muestra el token generado
    res.json({
        token     
    }); 
}



//Elimina el usuario de la base de datos
ctrlHome.rutaDelete = async (req, res)=>{

const { id }= req.body;

try {
    await Usuario.findByIdAndDelete(req.params.id);

    return res.json({
        msg:"User demoved correctly"
    });
} catch (error) {
    console.log("error delete user:", error);
}

};

//eliminar usuario de manera logica 
ctrlHome.logicalRutaDelete= async (req, res)=>{

    const {id} = req.body;

    const usuario = await Usuario.findByIdAndUpdate(id,{ activo: false }, {new: true });

    //Res if the delete is correcto
    res.json({msg:`User removed correctly`}, usuario)
}


//editar usuario segun el id 
ctrlHome.rutaPut = async (req , res)=>{

    const { id } = req.params;
    let {email, password, ...restoDeDatos}= req.body


    /*if(password){

    } */

    try {
        const usuario = await Usuario.findByIdAndUpdate(id, {email, password});
        return res.json(usuario)
    } catch (error) {
        console.log(`Error to update user: ${error}`)
    }

};


module.exports = ctrlHome;