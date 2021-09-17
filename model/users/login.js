const jwt = require('jsonwebtoken');

const User = require('./model');
const ErrorException = require('../../exceptions/error.exception');
const userDto = require('../../dtos/user');

const {JWT_ACCESS_SECRET} = process.env;

const login = async (email, password) => {
	const user = await User.findOne({email});
	if (!user || !user.isValidPassword(password) || !user.isActive()) {
		throw ErrorException.BadRequest('Wrong email or password');
	}
	const userData = userDto(user);
	const token = jwt.sign(userData, JWT_ACCESS_SECRET);
	user.accessToken = token;
	await user.save();

	return {
		user: userData,
		token
	}
}

module.exports = login
