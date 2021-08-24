const mongoose = require('mongoose');

const db = mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
});

process.on('SIGINT', async () => {
	const client = await db;
	await client.disconnect();
	console.log('DB connection terminated');
	process.exit(1);
});

module.exports = db;
