const Contacts = require('../../model/contacts');

const create = async (req, res, next) => {
	try {
		const contact = await Contacts.addContact(req.body);
		return res.status(201).json(contact);
	} catch (e) {
		next(e);
	}
}

module.exports = create;
