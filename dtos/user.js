module.exports = (user) => ({
	id: user._id,
	name: user.name,
	email: user.email
})
