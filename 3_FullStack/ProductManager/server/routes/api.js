const { Router } = require('express');
const router = Router();

router.post('/product', require('../controllers/postProducts'))

module.exports = router;