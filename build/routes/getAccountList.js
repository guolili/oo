'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _users = require('../modules/users');

var _crypto = require('../utils/crypto');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 解密
var router = _express2.default.Router();
// token 有或者没有
// token 有效期 超时
router.get('/api/getAccountList', function (req, res) {
	var token = req.headers.token;
	// aesDecrypt(token, '5.9') // 解密

	(0, _users.getAccountList)(function (result) {
		try {
			result && res.send({
				code: 1,
				msg: '登录成功5.9',
				data: result,
				token: (0, _crypto.aesDecrypt)(token, '5.9')
			}) || res.send({
				code: 0,
				msg: '获取失败'
			});
		} catch (e) {
			res.send({
				code: 0,
				msg: '服务器异常'
			});
		}
	});
});
exports.default = router;