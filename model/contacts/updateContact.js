const ContactsModel = require('./model');

const updateContact = async (id, body) => {
	return await ContactsModel.findOneAndUpdate({_id: id}, {...body}, {new: true});
}

module.exports = updateContact;
