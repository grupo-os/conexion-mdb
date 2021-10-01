const {} = require('express');



const verficarAdmin = (req, res, next) => {
    const{role} = req.usuario;

    console.log(role);

    //verifica en la BaseDeDatos SI EL USER tiene rol de ADMINISTRADOR

    if (role !== 'administrador') {
        

        return res.status(401).json({
            message:"No tiene permiso para ingresar"
        })
    };

    next();
}

module.exports ={ verficarAdmin }