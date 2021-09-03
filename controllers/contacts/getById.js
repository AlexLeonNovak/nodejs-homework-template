const Contacts = require('../../model/contacts');
const ErrorException = require('../../exceptions/error.exception');


const getById = async (req, res, next) => {
	try {
		const {contactId} = req.params;
		const {id: userId} = req.user;
		const contact = await Contacts.getContactById(userId, contactId);
		if (contact) {
			return res.OK({contact});
		}
		return next(ErrorException.NotFound());
	} catch (e) {
		next(e);
	}
}

module.exports = getById;
