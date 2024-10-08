const router = require('express').Router();
const authServices = require('../services/authServices');
// const { isGuest, isAuth } = require('../middleware/authMiddleware');
const { AUTH_COOKIE_NAME } = require('../constants');

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        let token = await authServices.login({
            email,
            password
        });
        res.cookie(AUTH_COOKIE_NAME, token);
        res.redirect('/');
    } catch (error) {
        res.render('auth/login', {error: error.message});
    }

});

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', async (req, res) => {
    const {email, password, rePass } = req.body;

    if (password !== rePass) {
        res.locals.error = 'Passwords do not match!'
        return res.render('auth/register')
    };

    try {

        await authServices.register({
            email,
            password
        });

        res.redirect('/');
    } catch (error) {
        res.render('auth/register', { error: getErrorMessage(error) });
    }

});

function getErrorMessage(error) {
    // console.log(error);
    let errorsArr = Object.keys(error.errors);

    if (errorsArr.length > 0) {
        return error.errors[errorsArr[0]];
    } else {
        return error.message
    }

}

router.get('/logout', (req, res) => {
    res.clearCookie(AUTH_COOKIE_NAME);
    res.redirect('/');
});

module.exports = router;