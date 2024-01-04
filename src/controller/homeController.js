const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home/all-posts');
});

router.get('/about', (req, res) => {
    res.render('home/about');
});

router.get('/search', (req, res) => {
    res.render('home/search');
});


module.exports = router;