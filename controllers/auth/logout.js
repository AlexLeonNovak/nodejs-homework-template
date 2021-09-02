
const logout = async (req, res, next) => {
	try {
		return res.json({});
	} catch (e) {
		next(e);
	}
}

module.exports = logout;
