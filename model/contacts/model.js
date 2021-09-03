const {Schema, Types, model} = require('mongoose');

const contactsSchema = new Schema(
	{
		name: String,
		email: String,
		phone: String,
		owner: {
			type: Types.ObjectId,
			ref: 'users',
			required: true
		}
	},
	{
		versionKey: false,
		timestamps: true
	}
);

const Contacts = model('Contacts', contactsSchema);

module.exports = Contacts;
