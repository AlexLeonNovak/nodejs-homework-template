const {Schema, model} = require('mongoose');

const contactsSchema = new Schema(
	{
		name: String,
		email: String,
		phone: String
	},
	{
		versionKey: false,
		timestamps: true
	}
);

const Contacts = model('Contacts', contactsSchema);

module.exports = Contacts;
