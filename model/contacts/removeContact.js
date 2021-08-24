const ContactsModel = require('./model');

const removeContact = async (id) => {
	return await ContactsModel.findOneAndRemove({_id: id});
}

module.exports = removeContact;
