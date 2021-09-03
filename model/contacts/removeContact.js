const ContactsModel = require('./model');

const removeContact = async (owner, id) => {
	return await ContactsModel.findOneAndRemove({_id: id, owner});
}

module.exports = removeContact;
