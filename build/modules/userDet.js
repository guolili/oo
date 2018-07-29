'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.userDet = undefined;

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userDet = function userDet(userInfo, callback) {
	// 用户的详细数据
	_config2.default.query('select * from userinfo where username = ?', userInfo.username, function (err, result) {
		if (!err) {
			callback(result);
		} else {
			throw new Error('error');
		}
	});
};

exports.userDet = userDet;