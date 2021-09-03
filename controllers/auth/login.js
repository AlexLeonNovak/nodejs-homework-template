const UserModel = require('../../model/users')

const login = async (req, res, next) => {
	try {
		const {email, password} = req.body;
		const userInfo = await UserModel.login(email, password);
		return res.OK({...userInfo});
	} catch (e) {
		next(e);
	}
}

module.exports = login;
