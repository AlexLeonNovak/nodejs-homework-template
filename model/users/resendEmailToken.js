const User = require('./model');
const userDto = require('../../dtos/user');
const ErrorException = require('../../exceptions/error.exception');
const {sendEmailConfirmation} = require('../../helpers/mailer');

const resendEmailToken = async (email) => {
	const user = await User.findOne({email});
	if (!user) {
		throw ErrorException.BadRequest('User not found');
	}

	if (!user.isWait()) {
		throw ErrorException.BadRequest('User already active');
	}

	if (!user.isBlocked()) {
		throw ErrorException.BadRequest('User blocked');
	}

  user.generateEmailConfirmToken();
	await user.save();

	const link = `${process.env.SERVER_URL}/api/auth/activate/${user.emailConfirmToken}`;
	await sendEmailConfirmation(user.email, link);

	return userDto(user);

}

module.exports = resendEmailToken;
