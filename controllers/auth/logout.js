const UserModel = require('../../model/users');

const logout = async (req, res, next) => {
	try {
		const {id} = req.user;
		await UserModel.logout(id);
		return res.NoContent();
	} catch (e) {
		next(e);
	}
}

module.exports = logout;
