const router = require('express').Router();

const { 
    rutaPost, rutaDelete, rutaGet, rutaPut
 } = require('../controllers/user.controllers');


//  route create a new user
router.post('/api/create-user', rutaPost)


//  route view everyone users
router.get('/api/get-user', rutaGet)


//  route for a delete user :ID
router.delete('/api/delete-user/:id', rutaDelete)


//  route for edit user :ID
router.put('/api/edit-user/:id', rutaPut)


module.exports = router;
