const ContactsModel = require('./model');

const getContactById = async (owner, id) => {
	return await ContactsModel.find({_id: id, owner});
}

module.exports = getContactById;
