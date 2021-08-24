const ContactsModel = require('./model');

const getContactById = async (id) => {
	return await ContactsModel.find({_id: id});
}

module.exports = getContactById;
