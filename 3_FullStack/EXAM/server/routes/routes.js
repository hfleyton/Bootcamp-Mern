const { Router } = require('express');
const router = Router();
const authenticate = require('../config/authenticate');


router.post('/createuser',require('../controllers/createUser.controller'));
router.post('/loginUser' , require('../controllers/loginUser.controller'))
router.post('/logOutUser' , require('../controllers/logoutUser.controller'))
router.post('/createMovie' ,authenticate,require('../controllers/createMovie.controller'))
router.post('/getReviews'  ,authenticate,require('../controllers/getReviews.controller'))
router.post('/getMovies' ,authenticate,require('../controllers/getMovies.controller'))
router.post('/addReview' ,authenticate, require('../controllers/addReview.controller'))
router.post('/deleteMovie' ,authenticate, require('../controllers/deleteMovie.controller'))


module.exports = router;

