const User = require('./model');
const userDto = require('../../dtos/user');
const ErrorException = require('../../exceptions/error.exception');

const activate = async (token) => {
	const [, time] = token.split('_');
	if (Number(time) + process.env.EMAIL_CONFIRM_TOKEN_EXPIRE >= Date.now()) {
		throw ErrorException.BadRequest('Activation token is expired');
	}
	const user = await User.findOne({emailConfirmToken: token});
	if (!user) {
		throw ErrorException.BadRequest('User not found');
	}

	user.activate();
	await user.save();

	return userDto(user);
}

module.exports = activate;
