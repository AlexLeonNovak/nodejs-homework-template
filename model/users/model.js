const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const { customAlphabet } = require('nanoid');
const { alphanumeric } = require('nanoid-dictionary');

const randomString = customAlphabet(alphanumeric, 32);
const {emailRegex} = require('../../helpers/constants');

const STATUS_ACTIVE = 'active';
const STATUS_WAIT = 'wait';
const STATUS_BLOCKED = 'blocked';

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
		},
		avatarUrl: {
			type: String,
			default: function () {
				return gravatar.url(this.email, { s: '250' }, true)
			}
		},
		emailConfirmToken: {
			type: String,
			default: `${randomString()}_${Date.now()}`
		},
		status: {
			type: String,
			default: STATUS_WAIT
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

usersSchema.methods.isActive = function () {
	return this.status === STATUS_ACTIVE;
}

usersSchema.methods.isWait = function () {
	return this.status === STATUS_WAIT;
}

usersSchema.methods.isBlocked = function () {
	return this.status === STATUS_BLOCKED;
}

usersSchema.methods.activate = function () {
	this.emailConfirmToken = null;
	this.status = STATUS_ACTIVE;
}

usersSchema.methods.generateEmailConfirmToken = function () {
	this.emailConfirmToken = `${randomString()}_${Date.now()}`;
}

const User = model('users', usersSchema);

module.exports = User;
