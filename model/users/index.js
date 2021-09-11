const registration = require('./registration');
const login = require('./login');
const logout = require('./logout');
const getByToken = require('./getByToken');
const updateAvatar = require('./updateAvatar');

module.exports = {
	registration,
	login,
	logout,
	getByToken,
	updateAvatar
}
