const Contacts = require('../../model/contacts');

const create = async (req, res, next) => {
	try {
		const {id: userId} = req.user;
		const contact = await Contacts.addContact({...req.body, owner: userId});
		return res.Created({contact});
	} catch (e) {
		next(e);
	}
}

module.exports = create;
