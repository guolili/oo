'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _users = require('../modules/users');

var _crypto = require('../utils/crypto');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
var sTime = void 0;
var eTime = void 0;
// c77b10d32737e7ff4641dda15fef30f8 token字段 zhangsan
router.post('/api/checkUser', function (req, res) {
	var token = req.headers.token;

	function fn() {
		(0, _users.checkUser)(req.body, function (result) {
			if (result) {
				res.send({
					code: 1,
					msg: '登录成功',
					username: req.body.username,
					token: (0, _crypto.aesEncrypt)(req.body.username, '5.9')
				});
			} else {
				// 0提醒
				res.send({
					code: 0,
					msg: '登录失败',
					username: req.body.username
				});
			}
		});
	}
	if (!token) {
		// 首次查找数据库
		sTime = new Date().getTime() / 1000;
		fn();
	} else {
		// user对比
		eTime = new Date().getTime() / 1000;
		var user = (0, _crypto.aesDecrypt)(token, '5.9');
		if (req.body.username === user) {
			res.send({
				code: 1,
				msg: '登录成功=>token',
				username: req.body.username,
				token: (0, _crypto.aesEncrypt)(req.body.username, '5.9')
			});
		} else {
			fn();
		}
	}
});
exports.default = router;
// 应用级
/*export default (req, res, next) => {
	res.send('checkOut')
}*/