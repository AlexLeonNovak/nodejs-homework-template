const ContactsModel = require('./model');

const updateContact = async (owner, id, body) => {
	return await ContactsModel.findOneAndUpdate({_id: id, owner}, {...body}, {new: true});
}

module.exports = updateContact;
