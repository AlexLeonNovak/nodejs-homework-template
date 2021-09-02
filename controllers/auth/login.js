
const login = async (req, res, next) => {
	try {
		return res.json({});
	} catch (e) {
		next(e);
	}
}

module.exports = login;
