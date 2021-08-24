const ContactsModel = require('./model');

const getAllContacts = async () => {
	return await ContactsModel.find({});
}

module.exports = getAllContacts;
