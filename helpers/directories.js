const path = require('path');

const {UPLOAD_DIR, TEMP_DIR, AVATAR_DIR} = process.env;

const uploadDir = path.join(process.cwd(), UPLOAD_DIR);
const avatarDir = path.join(uploadDir, AVATAR_DIR);
const tempDir = path.join(process.cwd(), TEMP_DIR);

module.exports = {
	uploadDir,
	avatarDir,
	tempDir
};
