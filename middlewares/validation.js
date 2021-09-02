const ErrorException = require('../exceptions/error.exception');

module.exports = (schema) => async (req, res, next) => {
	try {
		await schema.validateAsync(req.body, {abortEarly: false});
		return next();
	} catch (e) {
		next(ErrorException.BadRequest('Validation error', e.details))
	}
}
