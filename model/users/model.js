const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const {emailRegex} = require('../../helpers/constants');

const usersSchema = new Schema(
	{
		name: {
			type: String,
			minlength: 2
		},
		email: {
			type: String,
			required: true,
			unique: true,
			match: emailRegex
		},
		passwordHash: {
			type: String,
			required: true
		},
		accessToken: {
			type: String,
			default: null
		}
	},
	{
		versionKey: false,
		timestamps: true
	}
);

usersSchema.methods.setPassword = function (password) {
	const salt = bcrypt.genSaltSync(10)
	this.passwordHash = bcrypt.hashSync(password, salt);
}

usersSchema.methods.isValidPassword = function (password) {
	return bcrypt.compareSync(String(password), this.passwordHash)
}

const User = model('users', usersSchema);

module.exports = User;
