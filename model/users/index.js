const registration = require('./registration');
const login = require('./login');
const logout = require('./logout');
const getByToken = require('./getByToken');
const updateAvatar = require('./updateAvatar');
const activate = require('./activate');
const resendEmailToken = require('./resendEmailToken');

module.exports = {
	registration,
	login,
	logout,
	getByToken,
	updateAvatar,
	activate,
	resendEmailToken,
}
