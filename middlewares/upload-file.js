const multer = require('multer');
const path = require('path');
const ErrorException = require('../exceptions/error.exception');

const {tempDir} = require('../helpers/directories');

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, tempDir);
	},
	filename: function (req, file, cb) {
		const ext = path.extname(file.originalname);
		cb(null, `${req.user.id}_${Date.now().toString()}${ext}`);
	},
})

const uploadFile = multer({
	storage,
	limits: {
		fileSize: 4000000
	},
	fileFilter: function (req, file, cb) {
		if (file.mimetype.includes('image')) {
			return cb(null, true);
		}

		cb(ErrorException.BadRequest('Unsupported file format'))
	}
});

module.exports = uploadFile;
