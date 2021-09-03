const User = require('./model');

const logout = async (id) => {
	const user = await User.findById(id);
	if (!user) {
		return;
	}
	user.accessToken = null;
	return await user.save();
}

module.exports = logout;
