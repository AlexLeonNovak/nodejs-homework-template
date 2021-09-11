const express = require('express');

const router = express.Router();
const profileController = require('../../controllers/profile')
const {uploadFile} = require('../../middlewares')

router.patch('/avatar', uploadFile.single('image'), profileController.avatar);

module.exports = router;
