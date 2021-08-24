const Contacts = require('../../model/contacts');

const getAll = async (req, res, next) => {
	try {
		const contacts = await Contacts.getAllContacts();
		return res.json(contacts);
	} catch (e) {
		next(e);
	}
}

module.exports = getAll
