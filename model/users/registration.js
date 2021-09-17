const User = require('./model');
const ErrorException = require('../../exceptions/error.exception');
const userDto = require('../../dtos/user');
const { sendEmailConfirmation } = require('../../helpers/mailer');

const registration = async (email, password) => {
	const candidate = await User.findOne({email})
	if (candidate) {
		throw ErrorException.BadRequest('User registered already');
	}
	const user = new User({email});
	user.setPassword(password);
	await user.save();

	const link = `${process.env.SERVER_URL}/api/auth/activate/${user.emailConfirmToken}`;
	await sendEmailConfirmation(user.email, link);

	return userDto(user);
}

module.exports = registration;
