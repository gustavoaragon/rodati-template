module.exports = function (req, res, next) {
	res.header('app-version', '0.0.1');
	next();
}
