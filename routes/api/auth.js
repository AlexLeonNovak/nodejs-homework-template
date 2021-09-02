const express = require('express');
const router = express.Router();
const AuthController = require('../../controllers/auth');
const validate = require('../../middlewares/validation');
const {registrationAndLogin} = require('../../validations/auth');

router.post('/registration', validate(registrationAndLogin), AuthController.registration);
router.post('/login', validate(registrationAndLogin), AuthController.login);
router.get('/logout', AuthController.logout);

module.exports = router
