const router = require('express').Router();

const { 
    rutaGet, rutaPost
 } = require('../controllers/user.controllers');

//  route for view everybody users
router.get('/', rutaGet)

router.post('/', rutaPost)


module.exports = router;
