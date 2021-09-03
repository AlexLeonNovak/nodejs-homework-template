const Contacts = require('../../model/contacts');

const getAll = async (req, res, next) => {
	try {
		const {id: userId} = req.user;
		const contacts = await Contacts.getAllContacts(userId, req.query);
		return res.OK({...contacts});
	} catch (e) {
		next(e);
	}
}

module.exports = getAll
