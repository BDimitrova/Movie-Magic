const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home/all-posts');
});



module.exports = router;