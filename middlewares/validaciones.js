const Roles   = require('../models/Roles');
const Usuario = require('../models/user');

//Consultamos si existe el rol a la BaseDeDatos
const existeRol = async (role = '')=>{

    const roleExiste = await Roles.findOne({role});

    //Si no existe da error 
  
    if(!roleExiste){

        throw new Error(`Role ${role} does not exist`);
    }

};

//Consultamos si existe el email

const existeEmail = async (email = '')=>{

    const emailExiste =  await Usuario.findOne({email});


    //SI no existe da email notificamos un Error
    if(!emailExiste){
        throw new Error(`Email  ${email} does not exist`);
    }
};

module.exports ={ existeRol, existeEmail};