const ContactsModel = require('./model');

const addContacts = async (body) => {
	return await ContactsModel.create(body);
}

module.exports = addContacts;
