const login = require('./login');
const logout = require('./logout');
const registration = require('./registration');
const activate = require('./activate');
const resendEmailToken = require('./resendEmailToken');

module.exports = {
	login,
	logout,
	registration,
	activate,
	resendEmailToken
}
