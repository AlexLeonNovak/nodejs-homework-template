const ContactsModel = require('./model');

const addContacts = async (body) => {
	console.log(body);
	return await ContactsModel.create(body);
}

module.exports = addContacts;
