const UserModel = require('../../model/users')

const registration = async (req, res, next) => {
	try {
		const {email, password} = req.body;
		const user = await UserModel.registration(email, password);
		return res.Created({user});
	} catch (e) {
		next(e);
	}
}

module.exports = registration;
