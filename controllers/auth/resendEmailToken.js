const UserModel = require('../../model/users');

const resendEmailToken = async (req, res, next) => {
	try {
		const {email} = req.body;
		const userInfo = await UserModel.resendEmailToken(email);
		return res.OK({...userInfo});
	} catch (e) {
		next(e);
	}
}

module.exports = resendEmailToken;
