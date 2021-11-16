const { Router } = require('express');
const router = Router();
const authenticate = require('../config/authenticate');


router.post('/user',require('../controllers/createUser.controller'));
router.post('/updateAbonoRetiro' , authenticate, require('../controllers/updateAbonoRetiro.controller'))
router.post('/updateTransferencia' , authenticate, require('../controllers/updateTrasnferencia.controller'))
router.post('/getMovimientos' , authenticate ,require('../controllers/getMovimientos.controller'))
router.post('/loginUser' , require('../controllers/loginUser.controller'))

module.exports = router;

