const fs = require('fs/promises');
const path = require('path');
const UserModel = require('../../model/users');

const { avatarDir } = require('../../helpers/directories');
const { AVATAR_DIR } = process.env;

const avatar = async (req, res, next) => {
	try {
		const { id } = req.user;
		const { path: pathFile, filename } = req.file;
		try {
			await fs.rename(pathFile, path.join(avatarDir, filename));
		} catch (e) {
			await fs.unlink(pathFile);
		}

		const user = await UserModel.updateAvatar(id, path.join(AVATAR_DIR, filename));

		return res.OK({user});
	} catch (e) {
		next(e);
	}
}

module.exports = avatar;
