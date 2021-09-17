const nodemailer = require('nodemailer');

const {SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, SMTP_SECURE} = process.env;

const transporter = nodemailer.createTransport({
	hostname: SMTP_HOST,
	port: SMTP_PORT,
	secure: SMTP_SECURE === 'true',
	auth: {
		user: SMTP_USER,
		password: SMTP_PASSWORD
	}
});


const sendEmailConfirmation = async (email, link) => {
	await transporter.sendMail({
		from: SMTP_USER,
		to: email,
		subject: 'Activation account on Rebalancer',
		text: '',
		html: `
				<div>
					<h1>For activation follow link:</h1>
					<a href="${link}">${link}</a>
				</div>
			`
	})
}

module.exports = {
	sendEmailConfirmation
}
