const express = require('express');
const router = express.Router();
const AuthController = require('../../controllers/auth');
const {validation, auth} = require('../../middlewares');
const {registrationAndLogin} = require('../../validations/auth');

router.post('/registration', validation(registrationAndLogin), AuthController.registration);
router.post('/login', validation(registrationAndLogin), AuthController.login);
router.get('/logout', auth, AuthController.logout);

module.exports = router
