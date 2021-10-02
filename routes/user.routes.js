//se llama a las dependencias y carpetas a utilizar
const router = require('express').Router();
const {validar_jwt} = require('../middlewares/validar_jwt');
const {verficarAdmin} = require('../middlewares/validar_roles');
const {body} = require('express-validator');
const {validarCampo}= require('../helpers/validar_campo');
const {existeRol,existeEmail}= require('../middlewares/validaciones');


const { 
    rutaPost, rutaLogin, rutaDelete, rutaGet, rutaPut, logicalRutaDelete
 } = require('../controllers/user.controllers');


//  route create a new user crear user como administrador
// requiere validaciones
router.post('/api/create-user',
validar_jwt,
verficarAdmin,
body('email','email es incorrecto')
.isEmail()
.custom(existeEmail),
body('password',' password incorrecto')
.isLength({min: 4})
.not()
.isEmpty(),
body('role','no existe rol')
.not()
.isEmpty()
.custom(existeRol),
validarCampo,
rutaPost)
/***/

//rute login user

router.post('/api/login-user', rutaLogin)

//  route view everyone users
 //solo permite a admins con el token
router.get('/api/get-user',validar_jwt, verficarAdmin, rutaGet)


//  route for a delete user :ID of database
router.delete('/api/delete-user/:id', 
validar_jwt,
verficarAdmin,
 rutaDelete)

// route for logical delete user :id 
router.put( '/api/delete-user-logical/:id',
validar_jwt, 
verficarAdmin,
logicalRutaDelete)

//  route for edit user :ID
router.put('/api/edit-user/:id',
validar_jwt,
verficarAdmin,
body('email','El Email es incorrecto').isEmail(),
body('password','el password debe contener 4 caracteres').isLength({min: 4}),
body('role', 'El rol no es valido').custom(existeRol),
validarCampo,
 rutaPut)


module.exports = router;
