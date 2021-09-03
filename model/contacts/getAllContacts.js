const ContactsModel = require('./model');

const getAllContacts = async (owner) => {
	return await ContactsModel.find({owner});
}

module.exports = getAllContacts;
