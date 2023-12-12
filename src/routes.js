const router = require('express').Router();

const homeController = require('./controller/homeController');

router.use(homeController);
router.use('/about', (req, res) => {
    res.render('about');
});
router.use('/search', (req, res) => {
    res.render('search');
});
router.use('/*', (req, res) => {
    res.render('404');
});


module.exports = router;