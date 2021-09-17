const UserModel = require('../../model/users');

const activate = async (req, res, next) => {
	try {
		const {token} = req.params;
		const userInfo = await UserModel.activate(token);
		return res.OK({...userInfo});
	} catch (e) {
		next(e);
	}
}

module.exports = activate;
