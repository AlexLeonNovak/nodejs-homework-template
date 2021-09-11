const fs = require('fs/promises');
const {uploadDir, avatarDir, tempDir} = require('../helpers/directories');

const checkDirectories = async () => {
	try {
		await fs.access(uploadDir);
	} catch (e) {
		await fs.mkdir(uploadDir);
	}

	try {
		await fs.access(avatarDir);
	} catch (e) {
		await fs.mkdir(avatarDir);
	}

	try {
		await fs.access(tempDir);
	} catch (e) {
		await fs.mkdir(tempDir);
	}
}

module.exports = checkDirectories;
