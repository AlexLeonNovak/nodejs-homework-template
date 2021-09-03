const Contacts = require('../../model/contacts');
const ErrorException = require('../../exceptions/error.exception');

const update = async (req, res, next) => {
	try {
		const {contactId} = req.params;
		const {id: userId} = req.user;
		const contact = await Contacts.updateContact(userId, contactId, req.body);
		if (contact) {
			return res.OK({contact});
		}
		return next(ErrorException.NotFound());
	} catch (e) {
		next(e);
	}
}

module.exports = update;
