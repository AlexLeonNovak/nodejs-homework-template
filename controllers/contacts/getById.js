const Contacts = require('../../model/contacts');
const ErrorException = require('../../exceptions/error.exception');


const getById = async (req, res, next) => {
	try {
		const {contactId} = req.params;
		const contact = await Contacts.getContactById(contactId);
		if (contact) {
			return res.OK({contact});
		}
		return next(ErrorException.NotFound());
	} catch (e) {
		next(e);
	}
}

module.exports = getById;
