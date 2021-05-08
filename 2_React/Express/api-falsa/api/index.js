const express = require('express');
const router = express.Router();

router.use('/users' , require('./routes/users'));
router.use('/companies', require('./routes/companies'))
router.use('/user', require('./routes/newUserCompany'))

module.exports = router;