const Contacts = require('../../model/contacts');
const ErrorException = require('../../exceptions/error.exception');

const update = async (req, res, next) => {
	try {
		const {contactId} = req.params;
		const contact = await Contacts.updateContact(contactId, req.body);
		if (contact) {
			return res.OK({contact});
		}
		return next(ErrorException.NotFound());
	} catch (e) {
		next(e);
	}
}

module.exports = update;
