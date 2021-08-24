const Contacts = require('../../model/contacts');
const ErrorException = require('../../exceptions/error.exception');

const remove = async (req, res, next) => {
	try {
		const {contactId} = req.params;
		const contact = await Contacts.removeContact(contactId);
		if (contact) {
			return res.json(contact);
		}
		return next(ErrorException.NotFound());
	} catch (e) {
		next(e);
	}
}

module.exports = remove;
