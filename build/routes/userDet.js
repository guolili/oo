'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _userDet = require('../modules/userDet');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/api/userDet', function (req, res) {
	(0, _userDet.userDet)(req.body, function (result) {
		if (result) {
			res.send({
				mess: '用户信息获取成功',
				data: result
			});
		} else {
			res.send({
				mess: '用户信息获取失败',
				username: req.body.username
			});
		}
	});
});

exports.default = router;