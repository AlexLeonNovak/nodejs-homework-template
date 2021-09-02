const User = require('./model');
const ErrorException = require('../../exceptions/error.exception');
const userDto = require('../../dtos/user');

const registration = async (email, password) => {
	const candidate = await User.findOne({email})
	if (candidate) {
		throw ErrorException.BadRequest('User registered already');
	}
	const user = new User({email});
	user.setPassword(password);
	await user.save();
	
	return userDto(user);
}

module.exports = registration;
