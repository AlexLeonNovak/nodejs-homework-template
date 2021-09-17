module.exports = (user) => ({
	id: user._id,
	email: user.email,
	avatarUrl: user.avatarUrl,
	isActive: user.isActive(),
})
