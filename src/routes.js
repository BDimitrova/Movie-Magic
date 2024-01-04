const router = require('express').Router();

const homeController = require('./controller/homeController');
const moviesController = require('./controller/moviesController');
const authController = require('./controller/authController');

router.use(homeController);
router.use('/auth', authController);
router.use('/movies', moviesController);
router.use('/*', (req, res) => {
    res.render('home/404');
});

module.exports = router;