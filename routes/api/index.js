const express = require('express');
const router = express.Router();

const {auth} = require('../../middlewares');

router.use('/auth', require('./auth'));
router.use('/contacts', auth, require('./contacts'));
router.use('/profile', auth, require('./profile'));

module.exports = router;
