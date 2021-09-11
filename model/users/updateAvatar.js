const User = require('./model');
const userDto = require('../../dtos/user');

const updateAvatar = async (id, avatarUrl) => {
	const user = await User.findOneAndUpdate({_id: id}, {avatarUrl}, {new: true});
	return userDto(user);
}

module.exports = updateAvatar;
