const Joi = require('joi');

const {emailRegex} = require('../helpers/constants');

const registrationAndLogin = Joi.object({
	password: Joi.string().min(6).required(),
	email: Joi.string().email().pattern(new RegExp(emailRegex)).required()
});

module.exports = {
	registrationAndLogin,
}
