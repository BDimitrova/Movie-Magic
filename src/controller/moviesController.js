const router = require('express').Router();
const movieServices = require('../services/movieServices');

router.get('/create-post', (req, res) => {
    res.render('movies/create');
});

router.get('/:id/details', (req, res) => {
    res.render('movies/details');
});

module.exports = router;