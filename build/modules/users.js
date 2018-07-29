'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getAccountList = exports.checkUser = undefined;

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 登录
var checkUser = function checkUser(userInfo, callback) {
	// callback通信
	_config2.default.query('select * from userinfo where username = ?', userInfo.username, function (err, result) {
		var code = result && result.some(function (item) {
			return item.password === userInfo.password;
		});
		if (code) {
			// 注册
			callback(1);
		} else {
			// home
			callback(0);
		}
	});
};

var getAccountList = function getAccountList(callback) {
	_config2.default.query('select * from userinfo', function (err, result) {
		if (!err) {
			callback(result);
		} else {
			callback({
				code: 0,
				msg: 'fail'
			});
		}
	});
};

exports.checkUser = checkUser;
exports.getAccountList = getAccountList;