const User = require('./model');
const userDto = require('../../dtos/user');

const getByToken = async (token) => {
	const user = await User.findOne({accessToken: token});
	if (!user) {
		throw new Error('User not found');
	}
	return userDto(user);
}

module.exports = getByToken;
