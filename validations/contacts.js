const Joi = require('joi');

const create = Joi.object({
	name: Joi.string().min(2).max(32).required(),
	phone: Joi.string().pattern(new RegExp(/[0-9+()\s]{5,15}/)),
	email: Joi.string().email().required()
});

const update = Joi.object({
	name: Joi.string().min(2).max(32),
	phone: Joi.string().pattern(new RegExp(/[0-9+()\s]{5,15}/)),
	email: Joi.string().email()
}).or('name', 'email', 'phone');


module.exports = {
	create,
	update
}
