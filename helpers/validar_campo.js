const {validationResult} = require('express-validator');

const validarCampo = async (req, res, next) => {

    const errors = await validationResult(req);

    if(!errors.isEmpty()) {

        return res.status(400).json({message: errors.array()});
        
    }

    next();
}

module.exports = {
    validarCampo
}