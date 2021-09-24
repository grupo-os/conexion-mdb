const router = require('express').Router();

const { 
    rutaGet, rutaPost, rutaDelete
 } = require('../controllers/users.controllers');

//  route for view everybody users
router.get('/', rutaGet)

router.post('/', rutaPost)

router.delete('/', rutaDelete)

module.exports = router;