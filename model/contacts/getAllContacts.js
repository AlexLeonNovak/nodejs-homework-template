const ContactsModel = require('./model');

const getAllContacts = async (owner, query) => {
	const {limit = 5, offset = 0} = query;
	const contacts = await ContactsModel.find({owner})
		.populate({
			path: 'owner',
			select: ['_id', 'email'],
		})
		.skip(Number(offset))
		.limit(Number(limit))
	;
	const total = await ContactsModel.find({owner}).count();
	return {
		contacts,
		limit,
		offset,
		total
	}
}

module.exports = getAllContacts;
